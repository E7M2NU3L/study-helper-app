export function formatDate(isoDate : string) {
    const date = new Date(isoDate);
    return date.toLocaleString('en-US',{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
      });
  };