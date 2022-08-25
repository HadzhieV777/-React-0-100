# What are React's primary tasks?

 - Work with the DOM/browsers to render UI to
   the page.

 - Manage state for us between render cycles
   (i.e. state values are "remembered" from one
    render to the next).
 
 - Keep the UI updated whenever state change occur.


# What can't React handle on its own?

 - (Out)side effects!
   * localStorage
   * API/database interactions
   * Subscriptions (e.g. web sockets)
   * Syncing 2 different internal states together
   * Basically anything that React isn't in charge of
