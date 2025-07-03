import React from 'react'

export const timeFormat = (minutes) => {
    const hours=Math.floor(minutes/60);
    const minutesRemainder=minutes%60;
  return `${hours}h ${minutesRemainder}min`;
}
