// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-publications",
    title: "publications",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-presentations",
          title: "presentations",
          description: "Conference presentations in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/presentations/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses taught at UCLA and elsewhere.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitæ (March 2026). The full CV can be downloaded as a PDF using the icon on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },];
