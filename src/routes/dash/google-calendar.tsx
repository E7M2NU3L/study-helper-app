import { GoogleCalendarIcon } from "@/components/dashboard/google-calendar-icon";
import CreateEventDialog from "@/components/g-calendar/create-event";
import ListEvents from "@/components/g-calendar/list-event";
import { Button } from "@/components/ui/button";
import { AppErrClient } from "@/utils/app-err";
import { LogOutIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const GoogleCalendar = () => {
  // Configuration details
  const CLIENT_ID =
    "318568079115-ralmttcf6hcinui634afh3jru9e1fu5k.apps.googleusercontent.com";
  const API_KEY = "AIzaSyAude6B8HkxRgZTzjXLEsp-UIEHA_DgbIM";
  const DISCOVERY_DOC =
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
  const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

  // Token client type
  let tokenClient: {
    callback: (resp: { error?: any }) => Promise<void>;
    requestAccessToken: (options: { prompt: string }) => void;
  };

  let gapiInited = false;
  let gisInited = false;

  // Refs for DOM elements
  const authorizeBtnRef = useRef<HTMLButtonElement | null>(null);
  const signOutBtnRef = useRef<HTMLButtonElement | null>(null);
  const contentRef = useRef<HTMLPreElement | null>(null);
  const [connected, setConnected] = useState<boolean>(false);

  // Function to load external scripts dynamically
  const loadScript = (src: string, onLoad: () => void) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = onLoad;
    document.body.appendChild(script);
  };

  let windowinstance = window as any

  // Initialize Google API client
  const initializeGapiClient = async () => {
    await windowinstance.gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
    maybeEnableButtons();
  };

  const gapiLoaded = () => {
    windowinstance.gapi.load("client", initializeGapiClient);
  };

  const gisLoaded = () => {
    tokenClient = windowinstance.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: async () => {}, // Placeholder, set later
    });
    gisInited = true;
    maybeEnableButtons();
  };

  const maybeEnableButtons = () => {
    if (gapiInited && gisInited && authorizeBtnRef.current) {
      authorizeBtnRef.current.style.visibility = "visible";
    }
  };

  const handleAuthClick = async () => {
    tokenClient.callback = async (resp: { error?: any }) => {
      if (resp.error) {
        throw resp.error;
      }
      if (signOutBtnRef.current) {
        signOutBtnRef.current.style.visibility = "visible";
      }
      if (authorizeBtnRef.current) {
        setConnected(true);
        authorizeBtnRef.current.innerText = "Refresh";
      }
      await listUpcomingEvents();
    };

    const token = windowinstance.gapi.client.getToken();
    if (!token) {
      tokenClient.requestAccessToken({ prompt: "consent" });
    } else {
      tokenClient.requestAccessToken({ prompt: "" });
    }
  };

  const handleSignoutClick = () => {
    const token = windowinstance.gapi.client.getToken();
    if (token) {
      windowinstance.google.accounts.oauth2.revoke(token.access_token);
      windowinstance.gapi.client.setToken(null);
      if (contentRef.current) {
        contentRef.current.innerText = "";
      }
      if (authorizeBtnRef.current) {
        authorizeBtnRef.current.innerText = "Authorize";
      }
      if (signOutBtnRef.current) {
        signOutBtnRef.current.style.visibility = "hidden";
      }
    }
  };

  const [content, setContent] = useState<any | []>([]);

  const listUpcomingEvents = async () => {
    try {
      const response = await windowinstance.gapi.client.calendar.events.list({
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime",
      });

      const events = response.result.items;
      setContent(events);
    } catch (error) {
     AppErrClient(error);
    }
  };

  // Load the scripts when the component is mounted
  useEffect(() => {
    loadScript("https://apis.google.com/js/api.js", gapiLoaded);
    loadScript("https://accounts.google.com/gsi/client", gisLoaded);
  }, []);

  return (
    <div className="p-4 w-full">
      <main className="flex flex-row justify-between items-center flex-wrap gap-4">
        <main className="flex flex-col gap-1">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                Integrations - Google Calendar
            </h1>
            <p className="text-sm font-light tracking-tighter leading-tight text-muted-foreground">
                Boost your performance by connecting with google calendar to manage your tasks and events
            </p>
        </main>

        <main className="flex flex-row items-center gap-2">
            {connected && <CreateEventDialog />}
            <Button
                size={"sm"}
                variant={"default"}
                ref={authorizeBtnRef}
                style={{ visibility: "hidden" }}
                onClick={handleAuthClick}
            >
                <GoogleCalendarIcon className="mr-1 h-4 w-4" />
                Connect
            </Button>
            {connected &&  <Button
                size={"sm"}
                variant={"destructive"}
                ref={signOutBtnRef}
                onClick={handleSignoutClick}
            >
                <LogOutIcon className="mr-1 h-4 w-4" />
                Sign Out
            </Button>}
        </main>
      </main>
      <main className="my-4 grid grid-col gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {content.map((item : any, index : number) => (
           <ListEvents key={index} content={item} />
        ))}
      </main>
    </div>
  );
};

export default GoogleCalendar;
