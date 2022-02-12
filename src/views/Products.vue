<template>
  <div class="w-full">
    <div class="container">
      <h1 class="pageTitle">products</h1>
      <div class="product-list">
        <div class="product__item">
          <div class="product__item-title">vinyl</div>
          <div class="product__item-picture">
            <g-image
              src="~/assets/img/products/3rd-album-lp.png"
              width="250px"
            />
          </div>
        </div>
        <div class="product__item">
          <div class="product__item-title">t-shirt</div>
          <div class="product__item-picture">
            <g-image
              src="~/assets/img/products/3rd-album-ts.png"
              width="250px"
            />
          </div>
        </div>
      </div>
      <p class="how">
        週邊商品可透過以下實體通路以及活動現場直接向我們購買。也可透過 facebook
        或 gmail 聯絡，我們會盡快回覆並安排出貨。
      </p>
      <table class="sell-point">
        <tr>
          <th class="location">台北</th>
        </tr>
        <tr>
          <td class="store">PAR STORE</td>
          <td class="add">大同區赤峰街3巷1號</td>
        </tr>
        <tr>
          <td class="store">Little Sound</td>
          <td class="add">中山區中山北路2段42巷6號 B1</td>
        </tr>
        <tr>
          <td class="store">罄</td>
          <td class="add">大同區赤峰街59號</td>
        </tr>
        <tr>
          <td class="store">M@M RECORDS</td>
          <td class="add">大安區忠孝東路4段112樓4號之3</td>
        </tr>
        <tr>
          <td class="store">小白兔唱片</td>
          <td class="add">大安區浦城街21巷1-1號</td>
        </tr>
        <tr>
          <td class="store">佳佳中華店</td>
          <td class="add">中華路1段110號2樓</td>
        </tr>
        <tr>
          <td class="store">佳佳漢口店</td>
          <td class="add">漢口街1段3號 B1</td>
        </tr>
        <tr>
          <td class="store">藝大書店</td>
          <td class="add">北投區學園路1號</td>
        </tr>

        <tr>
          <th class="location">桃園</th>
        </tr>
        <tr>
          <td class="store">奮死唱片</td>
          <td class="add">中壢區中平路30號3樓</td>
        </tr>
        <tr>
          <th class="location">台中</th>
        </tr>
        <tr>
          <td class="store">元氣唱片行</td>
          <td class="add">西區福龍街7號</td>
        </tr>
        <tr>
          <th class="location">嘉義</th>
        </tr>
        <tr>
          <td class="store">荒屋</td>
          <td class="add">忠義街197巷1號</td>
        </tr>
        <tr>
          <th class="location">台南</th>
        </tr>
        <tr>
          <td class="store">TCRC Record</td>
          <td class="add">西門路2段314號 B1</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProdPage',
}
</script>

<style scoped>
.container {
  width: 100%;
  color: $text-color-main;
  margin: auto;
  @media (min-width: 670px) {
    width: 45rem;
  }

  .pageTitle {
    font-size: $font-size-album;
    text-transform: uppercase;
    padding: 5rem 5rem 0;
    margin-bottom: 4rem;

    @media (min-width: 670px) {
      padding: 7rem 0rem 0;
    }
  }

  .product-list {
    font-size: $font-size-mobile;
    text-transform: uppercase;
    margin-left: 5rem;
  }

  .how {
    font-size: $font-size-mobile;
    padding: 4rem 4rem 0;
    @media (min-width: 670px) {
      font-size: $font-size-desc;
    }
  }

  .sell-point {
    padding: 4rem;
    .location {
      font-size: $font-size-mobile;
      text-align: left;
      padding-top: 1rem;
      @media (min-width: 670px) {
        font-size: $font-size-desc;
      }
    }
    .store,
    .add {
      font-size: $font-size-desc;
      @media (min-width: 670px) {
        font-size: $font-size-song;
      }
    }
    .store {
      padding-right: 1.5rem;
    }
  }
}
</style>
