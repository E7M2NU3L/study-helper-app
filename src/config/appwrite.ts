import { appwriteConstants } from '@/constants/appwrite';
import {Account, Avatars, Client, Databases, Storage} from 'appwrite'

export const client = new Client();
client.setProject(appwriteConstants.projectId);
client.setEndpoint(appwriteConstants.projectEndpoint);

export const account = new Account(client);
export const storage = new Storage(client);
export const database = new Databases(client);
export const avatars = new Avatars(client);