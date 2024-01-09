<template>
  <div class="body">
    <div>
      <h1>ก็อป AAA</h1>
      <h1 style="color: #37003c">Featured Manager</h1>
      <div class="profile">
        <div class="top">
          <div class="stats">
            <img src="@/static/logo/t6.png" alt="" />
            <div class="statsData">
              <h5>Matches</h5>
              <h2>20</h2>
            </div>
            <div class="statsData">
              <h5>Wins</h5>
              <h2>12</h2>
            </div>
            <div class="statsData">
              <h5>Drows</h5>
              <h2>3</h2>
            </div>
            <div class="statsData">
              <h5>Losses</h5>
              <h2>5</h2>
            </div>
          </div>
          <div class="imageWarp">
            <img src="@/static/logo/manager/man41881.png" alt="" />
          </div>
        </div>
        <div class="bottom">
          <div class="name">
            <h3>Ange</h3>
            <h1>Postecoglou</h1>
          </div>
          <div class="footer">
            <div class="nationality">
              <img src="@/static/logo/flag/AU.png" alt="" />
              <h5>Australia</h5>
            </div>
            <div class="btn">
              <button>View Profile</button>
              <v-icon>mdi-arrow-right</v-icon>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h1>ต้นแบบ</h1>
      <img src="@/static/logo/001.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.profile {
  width: 320px;
  height: 450px;
  border: solid 0.1rem #ebe5eb;
  overflow: clip;
  border-radius: 10px;

  .top {
    background-image: url('@/static/logo/bg.png');
    background-size: cover;
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: flex-start;
    height: 320px;
    overflow: hidden;

    .imageWarp {
      height: 50%00px;
      width: 500px;
      background: #f0f0f0b9;
      position: relative;

      img {
        top: 20%;
        right: -10%;
        position: absolute;
        width: 280px;
        object-fit: contain;
        z-index: 5;
        transition: transform 500ms ease-out;

      }
    }
    .stats {
      background-color: #ffffffd7;
      height: 320px;
      padding: 1rem;
      color: #37003c;
      img {
        width: 80px;
      }
      h2 {
        line-height: 1.5rem;
        font-weight: 800;
      }
      h5 {
        line-height: 1rem;
        font-weight: 400;
      }
      .statsData {
        margin-bottom: 1rem;
      }
    }
  }
  .bottom {
    background-color: #ffffff;
    padding: 0.5rem;
    height: 130px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .name {
      h1,
      h3 {
        font-weight: 800;
        color: #37003c;
        line-height: 1.5rem;
      }
    }
    .footer {
      display: flex;
      justify-content: space-between;
      height: 20px;

      .nationality {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        h5 {
          font-weight: 300;
          font-size: 1rem;
        }
      }
      .btn {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: 800;
        color: #37003c;
        .v-icon {
          font-size: 1.1rem;
          font-weight: 900;
          color: #37003c;
        }
      }
    }
  }
}
.body {
  display: flex;
  gap: 10rem;
}

.imageWarp:hover {
 
  img:hover {
    transform: scale(1.1);


  }
}
</style>
