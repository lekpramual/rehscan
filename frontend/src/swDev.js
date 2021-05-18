export default function swDev() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(swUrl, {
        scope: ".", // <--- THIS BIT IS REQUIRED
      })
      .then(
        function (registration) {
          // Registration was successful
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        },
        function (err) {
          // registration failed :(
          console.log("ServiceWorker registration failed: ", err);
        }
      );
  }
}
