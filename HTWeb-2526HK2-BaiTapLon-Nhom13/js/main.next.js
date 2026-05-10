document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.querySelector(".menu-btn");
  var nav = document.querySelector(".nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  initHeroSlider();
  initCategoryBrowser();
  initDetailGallery();
  initContactForms();
});

function initHeroSlider() {
  var sliderTrack = document.getElementById("hero-slider-track");
  var sliderDots = document.getElementById("hero-slider-dots");

  if (!sliderTrack || !sliderDots) {
    return;
  }

  var heroSlides = [
    {
      image: "../images/bannercaocap.png",
      alt: "Banner xe điện hạng sang VoltRide",
      eyebrow: "Hạng sang",
      title: "Dòng xe điện cao cấp cho người cần trải nghiệm êm, mạnh và sang.",
      description: "Thiết kế nổi bật, quãng đường dài và nhiều công nghệ hỗ trợ di chuyển mỗi ngày.",
      primaryLabel: "Xem xe hạng sang",
      primaryHref: "./chi-tiet.html",
      secondaryLabel: "Nhận báo giá",
      secondaryHref: "./lien-he.html"
    },
    {
      image: "../images/bannertrungcap.png",
      alt: "Banner xe điện trung cấp VoltRide",
      eyebrow: "Trung cấp",
      title: "Phân khúc trung cấp cân bằng giữa chi phí đầu tư và hiệu quả sử dụng.",
      description: "Phù hợp đi học, đi làm, giao nhận nhẹ trong đô thị với mức giá dễ tiếp cận hơn.",
      primaryLabel: "Khám phá trung cấp",
      primaryHref: "./san-pham.html",
      secondaryLabel: "Đăng ký lái thử",
      secondaryHref: "./lien-he.html"
    },
    {
      image: "../images/bannerphothong.png",
      alt: "Banner xe điện phổ thông VoltRide",
      eyebrow: "Phổ thông",
      title: "Mẫu xe điện phổ thông cho nhu cầu cơ bản, dễ mua và dễ sử dụng.",
      description: "Tối ưu cho học sinh, sinh viên và gia đình cần thêm một chiếc xe điện tiết kiệm.",
      primaryLabel: "Xem xe phổ thông",
      primaryHref: "./san-pham.html",
      secondaryLabel: "Xem ưu đãi",
      secondaryHref: "./khuyen-mai.html"
    }
  ];

  sliderTrack.innerHTML = heroSlides
    .map(function (slide, index) {
      return (
        '<article class="hero-slide' + (index === 0 ? " active" : "") + '">' +
        '<img src="' + slide.image + '" alt="' + slide.alt + '">' +
        '<div class="hero-slide-overlay"></div>' +
        '<div class="hero-slide-content">' +
        '<span class="eyebrow eyebrow-light">' + slide.eyebrow + '</span>' +
        '<h1>' + slide.title + '</h1>' +
        '<p>' + slide.description + '</p>' +
        '<div class="hero-actions">' +
        '<a class="btn btn-primary" href="' + slide.primaryHref + '">' + slide.primaryLabel + '</a>' +
        '<a class="btn btn-outline hero-outline" href="' + slide.secondaryHref + '">' + slide.secondaryLabel + '</a>' +
        '</div>' +
        '<div class="stats-grid hero-slide-stats">' +
        '<article><strong>120km</strong><span>Tầm di chuyển tối đa</span></article>' +
        '<article><strong>3 năm</strong><span>Bảo hành pin và động cơ</span></article>' +
        '<article><strong>0%</strong><span>Hỗ trợ trả góp mở bán</span></article>' +
        '</div>' +
        '</div>' +
        '</article>'
      );
    })
    .join("");

  sliderDots.innerHTML = heroSlides
    .map(function (slide, index) {
      return '<button class="hero-dot' + (index === 0 ? ' active' : '') + '" type="button" data-slide-index="' +
        index + '" aria-label="Chuyển banner ' + (index + 1) + '"></button>';
    })
    .join("");

  var slides = sliderTrack.querySelectorAll(".hero-slide");
  var dots = sliderDots.querySelectorAll(".hero-dot");
  var currentSlide = 0;
  var autoplayId = null;

  function showSlide(index) {
    currentSlide = index;

    slides.forEach(function (slide, slideIndex) {
      slide.classList.toggle("active", slideIndex === index);
    });

    dots.forEach(function (dot, dotIndex) {
      dot.classList.toggle("active", dotIndex === index);
    });
  }

  function resetAutoplay() {
    if (autoplayId) {
      window.clearInterval(autoplayId);
    }

    autoplayId = window.setInterval(function () {
      var nextIndex = (currentSlide + 1) % slides.length;
      showSlide(nextIndex);
    }, 4000);
  }

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      var nextIndex = Number(dot.dataset.slideIndex);
      showSlide(nextIndex);
      resetAutoplay();
    });
  });

  showSlide(0);
  resetAutoplay();
}

function initCategoryBrowser() {
  var tabsRoot = document.getElementById("category-tabs");
  var featureRoot = document.getElementById("category-feature");
  var productsRoot = document.getElementById("category-products");

  if (!tabsRoot || !featureRoot || !productsRoot) {
    return;
  }

  var productCategories = [
    {
      label: "Hạng sang",
      tagClass: "tag",
      products: [
        {
          name: "VoltRide S Ultra Black",
          tag: "Hạng sang",
          image: "../images/xecaocap.png",
          price: "32.990.000đ",
          desc: "Bản màu đen bóng dành cho khách thích vẻ ngoài mạnh và sang trọng.",
          bullets: ["Pin Lithium 72V", "Quãng đường 120km", "Màn hình TFT cao cấp"]
        },
        {
          name: "VoltRide S Ultra Graphite",
          tag: "Hạng sang",
          image: "../images/xecaocap1.png",
          price: "33.490.000đ",
          desc: "Biến thể sắc xám hiện đại, hợp phong cách doanh nhân và đi làm hàng ngày.",
          bullets: ["Phanh đĩa trước sau", "Đèn LED projector", "Yên ngồi dày cao cấp"]
        },
        {
          name: "VoltRide S Ultra Copper",
          tag: "Hạng sang",
          image: "../images/caocap2.png",
          price: "33.990.000đ",
          desc: "Phiên bản phối màu nổi bật cho khách cần chiếc xe điện có điểm nhấn thị giác rõ ràng.",
          bullets: ["Thiết kế premium", "Khóa thông minh", "Khung xe chắc chắn"]
        }
      ]
    },
    {
      label: "Trung cấp",
      tagClass: "tag tag-blue",
      products: [
        {
          name: "VoltRide M City Navy",
          tag: "Trung cấp",
          image: "../images/xetrungcap.png",
          price: "21.490.000đ",
          desc: "Mẫu trung cấp đa dụng dành cho lịch trình đi học, đi làm và giao hàng nhẹ.",
          bullets: ["Quãng đường 90km", "Cốp rộng 22L", "Chống nước IP67"]
        },
        {
          name: "VoltRide M City White",
          tag: "Trung cấp",
          image: "../images/trungcap1.png",
          price: "21.790.000đ",
          desc: "Biến thể sáng màu cho người thích tổng thể gọn gàng, thanh lịch và trẻ trung.",
          bullets: ["Động cơ tiết kiệm điện", "Yên thấp dễ lái", "Thích hợp đi phố"]
        },
        {
          name: "VoltRide M City Red",
          tag: "Trung cấp",
          image: "../images/trungcap2.png",
          price: "21.990.000đ",
          desc: "Bản phối màu nổi bật cho khách cần xe điện cá tính nhưng vẫn cân bằng giá và tính năng.",
          bullets: ["Sạc đầy 5.5 giờ", "Khung sườn chịu lực tốt", "Đề pa mượt"]
        }
      ]
    },
    {
      label: "Phổ thông",
      tagClass: "tag tag-soft",
      products: [
        {
          name: "VoltRide Go Mint",
          tag: "Phổ thông",
          image: "../images/xephothong.png",
          price: "14.990.000đ",
          desc: "Mẫu xe phổ thông phù hợp học sinh, sinh viên hoặc gia đình cần xe thứ hai tiết kiệm.",
          bullets: ["Quãng đường 65km", "Sạc trong 6 giờ", "Chiều cao yên thân thiện"]
        },
        {
          name: "VoltRide Go Silver",
          tag: "Phổ thông",
          image: "../images/xephothong2.png",
          price: "15.290.000đ",
          desc: "Biến thể trung tính dễ dùng, hợp nhu cầu đi học, đi chợ và di chuyển gần mỗi ngày.",
          bullets: ["Pin tháo rời", "Đèn LED tiết kiệm điện", "Bảo trì đơn giản"]
        }
      ]
    }
  ];

  var currentCategoryIndex = 0;
  var currentProductIndex = 0;

  function renderTabs() {
    tabsRoot.innerHTML = productCategories
      .map(function (category, index) {
        return '<button class="category-tab' + (index === currentCategoryIndex ? ' active' : '') +
          '" type="button" data-category-index="' + index + '">' + category.label + '</button>';
      })
      .join("");

    tabsRoot.querySelectorAll(".category-tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        currentCategoryIndex = Number(tab.dataset.categoryIndex);
        currentProductIndex = 0;
        renderCategoryBrowser();
      });
    });
  }

  function renderFeature() {
    var category = productCategories[currentCategoryIndex];
    var product = category.products[currentProductIndex];

    featureRoot.innerHTML =
      '<div class="category-feature-media">' +
      '<img src="' + product.image + '" alt="' + product.name + '">' +
      '</div>' +
      '<div class="category-feature-copy">' +
      '<span class="' + category.tagClass + '">' + product.tag + '</span>' +
      '<h3>' + product.name + '</h3>' +
      '<p>' + product.desc + '</p>' +
      '<ul class="feature-list">' +
      product.bullets.map(function (bullet) {
        return '<li>' + bullet + '</li>';
      }).join("") +
      '</ul>' +
      '<div class="price-row">' +
      '<strong>' + product.price + '</strong>' +
      '<a href="./chi-tiet.html">Xem chi tiết</a>' +
      '</div>' +
      '</div>';
  }

  function renderProducts() {
    var category = productCategories[currentCategoryIndex];

    productsRoot.innerHTML = category.products
      .map(function (product, index) {
        return '<button class="product-choice-card card' + (index === currentProductIndex ? ' active' : '') +
          '" type="button" data-product-index="' + index + '">' +
          '<span class="product-choice-media"><img src="' + product.image + '" alt="' + product.name + '"></span>' +
          '<span class="product-choice-body">' +
          '<span class="' + category.tagClass + '">' + product.tag + '</span>' +
          '<strong>' + product.name + '</strong>' +
          '<small>' + product.price + '</small>' +
          '</span>' +
          '</button>';
      })
      .join("");

    productsRoot.querySelectorAll(".product-choice-card").forEach(function (card) {
      card.addEventListener("click", function () {
        currentProductIndex = Number(card.dataset.productIndex);
        renderFeature();
        renderProducts();
      });
    });
  }

  function renderCategoryBrowser() {
    renderTabs();
    renderFeature();
    renderProducts();
  }

  renderCategoryBrowser();
}

function initDetailGallery() {
  var thumbs = document.querySelectorAll(".thumb");
  var mainPhoto = document.getElementById("anh-lon");

  thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      thumbs.forEach(function (item) {
        item.classList.remove("active");
      });

      thumb.classList.add("active");

      if (mainPhoto) {
        mainPhoto.src = thumb.dataset.full;
        mainPhoto.alt = thumb.dataset.alt;
      }
    });
  });
}

function initContactForms() {
  const forms = document.querySelectorAll(".contact-form");
  const nameRegex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúýĂăĐđĨĩŨũƠơƯưẠ-ỹ\s'-]{2,100}$/i;
  const phoneRegex = /^(\+84|0)[1-9]\d{8,9}$/;
  const addressRegex = /^[\w\sÀ-ỹ,.\-/#()']{10,300}$/u;

  forms.forEach(form => {
    const status = form.querySelector(".form-status");
    form.addEventListener("submit", e => {
      e.preventDefault();
      form.querySelectorAll(".error-msg").forEach(el => el.remove());
      let valid = true;

      const name = form.querySelector('input[name="hoten"], input[name="name"], #hoten, #name');
      if (name && !nameRegex.test(name.value.trim())) {
        showError(name, "Họ tên không hợp lệ");
        valid = false;
      }

      const phone = form.querySelector('input[name="sodienthoai"], input[name="phone"], #sodienthoai, #phone');
      if (phone && !phoneRegex.test(phone.value.trim())) {
        showError(phone, "SĐT không hợp lệ (0 hoặc +84)");
        valid = false;
      }

      const address = form.querySelector('input[name="diachi"], textarea[name="diachi"], #diachi');
      if (address && !addressRegex.test(address.value.trim())) {
        showError(address, "Địa chỉ phải 10-300 ký tự");
        valid = false;
      }

      if (valid) {
        if (status) status.textContent = "✅ Đã ghi nhận!";
        setTimeout(() => { form.reset(); if (status) status.textContent = ""; }, 1500);
      }
    });
  });

  function showError(input, msg) {
    const err = document.createElement("div");
    err.className = "error-msg";
    err.style.color = "#d32f2f";
    err.style.fontSize = "13px";
    err.style.marginTop = "4px";
    err.textContent = msg;
    input.parentNode.appendChild(err);
    input.style.borderColor = "#d32f2f";
  }
}
