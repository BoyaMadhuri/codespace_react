import React, { useState, useEffect } from 'react';

// Component code below
useEffect(() => {
  try {
    if (typeof document !== 'undefined' && document.title !== undefined) {
      document.title = `Clicked ${count} ${count === 1 ? 'time' : 'times'}`;
    }
  } catch (error) {
    console.error('Failed to update document title:', error);
    // Optionally show fallback UI or log to monitoring service
  }
}, [count]);
