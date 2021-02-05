(function () {
  const Gallery = document.getElementById("Gallery");
  const Images = [
    "https://images.unsplash.com/photo-1593318917163-76fa09974ba5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1603251581451-c87f8ee7febc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1881&q=80",
    "https://images.unsplash.com/photo-1611979461856-abde823d722a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    "https://images.unsplash.com/photo-1594003972545-f2f34d722f34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80",
    "https://images.unsplash.com/photo-1612082452372-cad8932cdc31?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1598185092528-a88552ff8040?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1612312849656-940d9213c832?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80",
    "https://images.unsplash.com/photo-1611591378777-1c4d4e3aaf36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1203&q=80",
    "https://images.unsplash.com/photo-1612288528103-edc64749d4ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
    "https://images.unsplash.com/photo-1551921038-a9009c20adb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80",
    "https://images.unsplash.com/photo-1611908494970-3eea5e0a773e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1611283949835-a1d2d006a864?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1489779162738-f81aed9b0a25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1082&q=80",
    "https://images.unsplash.com/photo-1612310835528-f89027f26b84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    "https://images.unsplash.com/photo-1492567291473-fe3dfc175b45?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=631&q=80",
    "https://images.unsplash.com/photo-1493247916314-b6e2d33e25b6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80",
    "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
    "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80",
    "https://images.unsplash.com/photo-1553531384-397c80973a0b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1444877466744-dc2f2af2b931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
    "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=603&q=80",
    "https://images.unsplash.com/photo-1463107971871-fbac9ddb920f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80",
    "https://images.unsplash.com/photo-1582125929135-b142ac636df2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80",
    "https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1507090960745-b32f65d3113a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1597739239353-50270a473397?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=564&q=80",
  ];

  Images.map((image, i) => {
    Gallery.innerHTML += `
      <div class="Gallery_item">
        <img class="Gallery_item_image" src=${image} alt="image${i}" />
        <a class="Gallery_item_info" href="#">
            <h4 class="Gallery_item_info_name">Image ${i} </h4>
            <p class="Gallery_item_info_description">Gallery VanilaJS</p>
        </a>
      </div>
    `;
  });

  const GalleryItems = document.querySelectorAll(".Gallery_item");

  if (Gallery.offsetWidth > 1000) {
    iterador = Gallery.offsetWidth * 0.13;
  } else if (Gallery.offsetWidth > 600 && Gallery.offsetWidth < 1000) {
    iterador = Gallery.offsetWidth * 0.18;
  } else if (Gallery.offsetWidth < 600) {
    iterador = Gallery.offsetWidth * 0.28;
  }

  GalleryItems.forEach((item) => {
    let image = item.querySelector(".Gallery_item .Gallery_item_image");
    image.onload = () => {
      let ratio = image.width / image.height;
      item.style.width = iterador * ratio + "px";
      item.style.flexGrow = ratio;
    };
  });

  const handleLighbox = (index) => {
    count = index;
    document.getElementById("lightbox").innerHTML = `
      <div id="close"><div class="close closeOne"></div><div class="close closeTwo"></div></div>
      <div class="lightbox-controls" id="prev"><div class="arrow prev"></div></div>
      <img class="lightbox-image" src=${Images[count]} alt="image${count}" />
      <div class="lightbox-controls" id="next"><div class="arrow next"></div></div>
    `;
    document.body.style.overflow = "hidden";

    document
      .querySelector("#prev")
      .addEventListener("click", () => Prev(index));
    document
      .querySelector("#next")
      .addEventListener("click", () => Next(index));
    document.querySelector("#close").addEventListener("click", Close);
  };

  const Prev = (count) => {
    if (count === 0) {
      handleLighbox(Images.length - 1);
    } else {
      handleLighbox(count - 1);
    }
  };

  const Next = (count) => {
    if (count >= Images.length - 1) {
      handleLighbox(0);
    } else {
      handleLighbox(count + 1);
    }
  };

  const Close = () => {
    lightbox = document.getElementById("lightbox");
    document.body.removeChild(lightbox);
    document.body.style.overflow = "visible";
  };

  const withKey = () => {
    if (event.which === 27 || event.keyCode === 27) {
      Close();
    } else if (event.which === 37 || event.keyCode === 37) {
      Prev(count);
    } else if (event.which === 39 || event.keyCode === 39) {
      Next(count);
    }
  };

  const crear = (index) => {
    const section = document.createElement("div");
    section.setAttribute("class", "lightbox");
    section.setAttribute("id", "lightbox");

    document.body.appendChild(section);
    handleLighbox(index);
    document.body.addEventListener("keydown", () => withKey(index));
  };

  for (let i = 0; i < Images.length; i++) {
    GalleryItems[i].addEventListener("click", () => {
      index = i;
      crear(index);
    });
  }
})();
