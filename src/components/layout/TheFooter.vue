<template>
  <footer>
    <div class="container">
      <div class="row mt-5 mt-lg-0">
        <div class="col">
          <div class="row">
            <div class="col-sm-6"><h3>Ready to get started?</h3></div>
            <div class="col-sm-6 text-sm-end">
              <base-button mode="outline" color="#ffffff" borderColor="#ffffff"
                >Contact Us</base-button
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-3 col-6 col-md-4 my-auto col-icon">
          <div>
            <div class="d-flex">
              <base-logo></base-logo>
              <h6>BrandBuzz</h6>
            </div>
            <ul class="list-inline mt-4 ms-2">
              <li class="list-inline-item logo">
                <a href="#"
                  ><img
                    src="../../assets/logos/facebook.png"
                    alt="facebook-logo"
                /></a>
              </li>
              <li class="list-inline-item logo">
                <a href="#"
                  ><img
                    src="../../assets/logos/instagram.png"
                    alt="instagram-logo"
                /></a>
              </li>
              <li class="list-inline-item logo">
                <a href="#"
                  ><img src="../../assets/logos/twitter.png" alt="X-logo"
                /></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-6 col-md">
          <unordered-list :items="companyItems"></unordered-list>
        </div>
        <div class="col-lg-3 col-6 col-md-4">
          <unordered-list :items="designsItems"></unordered-list>
        </div>
        <div class="col-lg-3 col-6 col-md-4">
          <unordered-list :items="resourcesItems"></unordered-list>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-5">
        <div class="col text-center copy-right">
          <p class="m-0">All right reversed 2024</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      companyItems: ["Company", "About", "Contact", "Careers", "Team"],
      designsItems: [
        "Designs",
        "1-to-1 Projects",
        "Find a designer",
        "Discover inspiration",
        "Pricing",
      ],
      resourcesItems: [
        "Become a designer",
        "Blog",
        "Design without borders",
        "99awards",
        "Affiliates",
      ],
    };
  },
};
</script>

<style scoped>
footer {
  background-color: #fcede6;
}
.col > div {
  align-items: center;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  background-color: #e85f19;
  color: #ffffff;
  /* width: 85%; */
  height: 95px;
  margin: auto;
  border: 2px solid #ffffff;
  border-radius: 8px;
  padding: 15px 35px;
  position: relative;
  top: -50%;
}

h6 {
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 0;
  padding-top: 6px;
}

.list-inline-item.logo {
  margin-right: 13px;
}

.copy-right {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e85f19;
  color: #ffffff;
  /* padding: 30px 0; */
  height: 100px;
  /* border-radius: 46% 54% 0% 0% / 86% 86% 14% 14%; */
  /* clip-path: ellipse(51% 87% at 50% 112%); */
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0,10 C30,0 70,0 100,10 Z" fill="%23D9541E"/></svg>')
    no-repeat bottom;
  background-size: cover;
  /* border: 2px solid #e65415; */
}

/* .col > div .outline {
  margin-left: 20px;
} */

@media (max-width: 991.98px) {
  .col-icon {
    padding: 0;
  }
  .col > div h3 {
    font-size: 22px;
  }
}

@media (max-width: 767.98px) {
  .col > div {
    padding: 15px 10px;
  }

  .col > div h3 {
    font-size: 16px;
  }

  .col > div .outline {
    font-size: 14px;
    padding: 0.5rem 1rem;
    margin-bottom: 5px;
  }
}

@media (max-width: 575.98px) {
  .col > div {
    text-align: center;
    height: 100px;
    /* width: 90%; */
  }
  .col > div h3 {
    font-size: 17px;
  }
  .col > div .outline {
    /* font-size: 13px;
    padding: 0.4rem 0.8rem; */
    margin-top: 5px;
  }
  /* .row-items {
    margin-left: 15px;
  } */
}
</style>
