export const displayDate = (date: Date): string => {
  let timeToDisplay = null;
  if (typeof date === 'string') {
    timeToDisplay = new Date(date);
    if (isNaN(timeToDisplay.getTime())) {
      return '';
    }
  }

  if (timeToDisplay === null) {
    return '';
  }

  const now = new Date();
  const diff = now.getTime() - timeToDisplay.getTime();
  const diffInMinutes = Math.round(diff / 60000);
  if (diffInMinutes < 1) {
    return 'Now';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInMinutes < 1440) {
    return `${Math.round(diffInMinutes / 60)} hours ago`;
  } else {
    return `${Math.round(diffInMinutes / 1440)} days ago`;
  }
};