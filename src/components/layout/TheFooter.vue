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
    </div>
  </footer>
</template>

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

/* .col > div .outline {
  margin-left: 20px;
} */

@media (max-width: 991.98px) {
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
    width: 90%;
  }
  /* .col > div h3 {
    font-size: 17px;
  } */
  .col > div .outline {
    /* font-size: 13px;
    padding: 0.4rem 0.8rem; */
    margin-top: 5px;
  }
}
</style>
