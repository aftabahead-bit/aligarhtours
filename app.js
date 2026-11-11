const prices = {
  standard: "₹14,999",
  deluxe: "₹15,999",
  premium: "₹21,999"
};

const price = document.querySelector("#price");
const tierButtons = document.querySelectorAll(".tier-button");

tierButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tierButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    price.textContent = prices[button.dataset.tier];
  });
});

const dateInput = document.querySelector("#travel-date");
const today = new Date();
dateInput.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];

document.querySelector("#inquiry-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name").trim();
  const phone = form.get("phone").trim();
  const destination = form.get("destination");
  const travelDate = form.get("travel-date");
  const message = document.querySelector("#form-message");

  if (!name || !phone || !travelDate) {
    message.textContent = "Please fill in your name, WhatsApp number and travel date.";
    return;
  }

  const whatsappText = [
    `Hello Aligarh Tours, my name is ${name}.`,
    `I am interested in a ${destination} trip.`,
    `Preferred travel date: ${travelDate}.`,
    `WhatsApp number: ${phone}.`
  ].join("\n");

  window.open(`https://wa.me/918650229133?text=${encodeURIComponent(whatsappText)}`, "_blank", "noopener,noreferrer");
  message.textContent = "Opening WhatsApp with your trip details...";
});

const kashmirMedia = {
  srinagar: {
    location: "Srinagar",
    title: "Dal Lake, framed in stillness.",
    description: "Glide past carved houseboats and quiet Himalayan reflections as the valley wakes in soft morning light.",
    image: "media/photos/srinagar-dal-lake-shikara.jpg",
    videos: [
      "media/kashmir-srinagar-01.mp4", "media/kashmir-srinagar-02.mp4", "media/kashmir-srinagar-03.mp4",
      "media/kashmir-srinagar-04.mp4", "media/kashmir-srinagar-05.mp4"
    ],
    gallery: [
      ["Dal Lake houseboats", "Morning reflections on Srinagar's iconic lake.", "media/photos/srinagar-dal-lake-shikara.jpg"],
      ["Shalimar Bagh", "Mughal gardens framed by Kashmir's quiet light.", "media/photos/srinagar-shalimar-bagh.jpg"],
      ["Srinagar panorama", "A wide view across the valley and city.", "media/photos/srinagar-panorama.jpg"],
      ["Shankaracharya Temple", "A heritage viewpoint above Srinagar.", "media/photos/srinagar-shankaracharya-temple.jpg"],
      ["Hazratbal Shrine", "A peaceful heritage landmark near Dal Lake.", "media/photos/srinagar-hazratbal-shrine.jpg"]
    ]
  },
  gulmarg: {
    location: "Gulmarg",
    title: "Meadows beneath the gondola.",
    description: "Ride toward Apharwat Peak for wide-open alpine views, pine-scented air and an unhurried mountain horizon.",
    image: "media/photos/gulmarg-meadows-01.jpg",
    videos: [
      "media/kashmir-gulmarg-01.mp4", "media/kashmir-gulmarg-02.mp4", "media/kashmir-gulmarg-03.mp4",
      "media/kashmir-gulmarg-04.mp4", "media/kashmir-gulmarg-05.mp4"
    ],
    gallery: [
      ["Gulmarg meadows", "Wide alpine meadows beneath the Pir Panjal range.", "media/photos/gulmarg-meadows-01.jpg"],
      ["Apharwat winter view", "Snow-bright slopes and crisp mountain silence.", "media/photos/gulmarg-meadows-02.jpg"],
      ["Gulmarg Gondola", "A cable-car ascent toward high alpine terrain.", "media/photos/gulmarg-gondola.jpg"],
      ["Gulmarg mountain stay", "A quiet winter landscape around the meadows.", "media/photos/gulmarg-hotel-landscape.jpg"]
    ]
  },
  "gulmarg-snow": {
    location: "Gulmarg Snow Sports",
    title: "Chase the rush through fresh snow.",
    description: "Ski, snowboard or take a high-speed snowmobile across powdery slopes where every turn feels cinematic.",
    image: "media/photos/gulmarg-meadows-02.jpg",
    videos: [],
    gallery: [
      ["Fresh powder", "A winter-ready view of Gulmarg's alpine slopes.", "media/photos/gulmarg-meadows-02.jpg"],
      ["Gondola heights", "The route toward Apharwat's snow country.", "media/photos/gulmarg-gondola.jpg"],
      ["Snow meadow", "Open white landscapes around the resort.", "media/photos/gulmarg-meadows-01.jpg"],
      ["Winter mountain stay", "A cold-season retreat beneath the peaks.", "media/photos/gulmarg-hotel-landscape.jpg"]
    ]
  },
  pahalgam: {
    location: "Pahalgam",
    title: "Where the Lidder River slows time.",
    description: "Follow the river through Baisaran's pine valleys, emerald meadows and the quiet drama of the high Himalayas.",
    image: "media/photos/pahalgam-valley.jpg",
    videos: [
      "media/kashmir-pahalgam-01.mp4", "media/kashmir-pahalgam-02.mp4", "media/kashmir-pahalgam-03.mp4",
      "media/kashmir-pahalgam-04.mp4", "media/kashmir-pahalgam-05.mp4"
    ],
    gallery: [
      ["Pahalgam valley", "Green valley walls and high Himalayan air.", "media/photos/pahalgam-valley.jpg"],
      ["Kashmir Valley trek", "A scenic trail through Pahalgam's open landscape.", "media/photos/pahalgam-trek-valley-01.jpg"],
      ["Pahalgam trail", "Quiet walking routes through the valley.", "media/photos/pahalgam-trek-valley-02.jpg"],
      ["Mountain river country", "Rocky paths and dramatic mountain views.", "media/photos/pahalgam-trek-valley-03.jpg"]
    ]
  },
  sonamarg: {
    location: "Sonamarg",
    title: "The meadow of gold, beyond the road.",
    description: "Meet glacier-blue streams and Thajiwas views in a landscape that shifts from meadow green to snow-white.",
    image: "media/photos/sonamarg-mountain-meadow.jpg",
    videos: [],
    gallery: [
      ["Sonamarg meadow", "The Meadow of Gold beneath snow-dusted ridges.", "media/photos/sonamarg-mountain-meadow.jpg"],
      ["Krishansar Lake", "A high-altitude lake in Sonamarg country.", "media/photos/sonamarg-krishansar-lake.jpg"],
      ["Thajiwas Park", "Open mountain views toward the glacier region.", "media/photos/sonamarg-thajiwas-park.jpg"],
      ["Thajiwas mountain view", "A wide, cool-toned panorama of Sonamarg.", "media/photos/sonamarg-thajiwas-park-02.jpg"],
      ["Sonamarg autumn landscape", "The valley in a softer seasonal palette.", "media/photos/sonamarg-october-landscape.jpg"]
    ]
  }
};

const mediaVideo = document.querySelector(".media-video");
const mediaStill = document.querySelector(".media-still");
const mediaLocation = document.querySelector("#media-location");
const mediaTitle = document.querySelector("#media-title");
const mediaDescription = document.querySelector("#media-description");
const mediaGallery = document.querySelector("#media-gallery");
const mediaVideoStrip = document.querySelector("#media-video-strip");
const mediaTabs = document.querySelectorAll(".media-tab");
const mediaThumbnails = document.querySelectorAll(".media-thumbnail");
const mediaViewButtons = document.querySelectorAll(".media-view-button");
let activeMediaKey = "srinagar";
let activeMediaView = "video";
let activeVideoIndex = 0;
let activeGallery = [];
let activeGalleryIndex = 0;
const lightbox = document.querySelector("#media-lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxCaption = document.querySelector("#lightbox-caption");

function renderGallery(gallery) {
  activeGallery = gallery || [];
  mediaGallery.innerHTML = activeGallery.map((item, index) => `
    <button class="media-gallery-card" type="button" data-gallery-index="${index}" aria-label="Open ${item[0]} image">
      <img src="${item[2]}" alt="${item[0]} — ${item[1]}" loading="lazy">
      <span class="media-gallery-caption"><strong>${item[0]}</strong><small>${item[1]}</small></span>
    </button>
  `).join("");
  mediaGallery.querySelectorAll(".media-gallery-card").forEach((card) => {
    card.addEventListener("click", () => openLightbox(Number(card.dataset.galleryIndex)));
  });
}

function renderVideoStrip(videos) {
  activeVideoIndex = 0;
  if (!videos || videos.length === 0) {
    mediaVideoStrip.innerHTML = '<span class="media-video-empty">Destination videos will appear here when added.</span>';
    return;
  }
  mediaVideoStrip.innerHTML = videos.map((_, index) =>
    `<button class="media-video-chip${index === 0 ? " is-active" : ""}" type="button" data-video-index="${index}">Video ${String(index + 1).padStart(2, "0")}</button>`
  ).join("");
  mediaVideoStrip.querySelectorAll(".media-video-chip").forEach((button) => {
    button.addEventListener("click", () => {
      activeVideoIndex = Number(button.dataset.videoIndex);
      mediaVideo.src = videos[activeVideoIndex];
      mediaVideo.load();
      mediaVideo.play().catch(() => {});
      mediaVideoStrip.querySelectorAll(".media-video-chip").forEach((item) => item.classList.toggle("is-active", item === button));
      setMediaView("video");
    });
  });
}

function openLightbox(index) {
  if (!activeGallery[index]) return;
  activeGalleryIndex = index;
  const [title, caption, image] = activeGallery[index];
  lightboxImage.src = image;
  lightboxImage.alt = title;
  lightboxTitle.textContent = title;
  lightboxCaption.textContent = caption;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  document.querySelector(".lightbox-close").focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

function moveLightbox(step) {
  const nextIndex = (activeGalleryIndex + step + activeGallery.length) % activeGallery.length;
  openLightbox(nextIndex);
}

function setMediaView(view) {
  activeMediaView = view;
  mediaViewButtons.forEach((button) => {
    const isActive = button.dataset.mediaView === view;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (view === "still") {
    mediaVideo.pause();
    mediaVideo.style.opacity = "0";
    mediaStill.hidden = false;
  } else {
    mediaStill.hidden = true;
    mediaVideo.style.opacity = "1";
    mediaVideo.play().catch(() => {});
  }
}

function selectMedia(key) {
  const media = kashmirMedia[key];
  if (!media) return;
  activeMediaKey = key;
  mediaLocation.textContent = media.location;
  mediaTitle.textContent = media.title;
  mediaDescription.textContent = media.description;
  mediaStill.src = media.image;
  mediaStill.alt = `${media.location} Kashmir travel preview`;
  renderGallery(media.gallery);
  renderVideoStrip(media.videos);
  if (media.videos.length > 0) {
    mediaVideo.src = media.videos[0];
  } else {
    mediaVideo.removeAttribute("src");
    mediaVideo.load();
  }
  mediaTabs.forEach((tab) => {
    const isActive = tab.dataset.mediaTab === key;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
  mediaThumbnails.forEach((thumbnail) => thumbnail.classList.toggle("is-active", thumbnail.dataset.mediaThumb === key));
  mediaVideo.load();
  setMediaView(media.videos.length > 0 ? activeMediaView : "still");
}

mediaTabs.forEach((tab) => tab.addEventListener("click", () => selectMedia(tab.dataset.mediaTab)));
mediaThumbnails.forEach((thumbnail) => thumbnail.addEventListener("click", () => selectMedia(thumbnail.dataset.mediaThumb)));
mediaViewButtons.forEach((button) => button.addEventListener("click", () => setMediaView(button.dataset.mediaView)));
mediaVideo.addEventListener("error", () => {
  if (activeMediaView === "video") setMediaView("still");
});
document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
document.querySelector(".lightbox-prev").addEventListener("click", () => moveLightbox(-1));
document.querySelector(".lightbox-next").addEventListener("click", () => moveLightbox(1));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (lightbox.hidden) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") moveLightbox(-1);
  if (event.key === "ArrowRight") moveLightbox(1);
});
selectMedia(activeMediaKey);
