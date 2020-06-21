<template>
  <div class="card">
    <div class="card-header">
      <h3>Payout Info</h3>
    </div>
    <div class="card-body">
      <div class="border border-warning p-2">
        <i class="fa fa-exclamation-triangle text-warning"></i> In order for you to receive payment, please add your payout info.
      </div>
      <p class="card-text mt-3">
        Enter your payment information to receive funds from ticket sales. You will receive the first
        payout of 50% 2 weeks after event ends, and another 50% one month after your event ends.
        Bank direct deposit will be handled by Stripe, which requires the information below.
        <a
          href="#"
          target="_blank"
        >What's Stripe?</a>
      </p>

      <label>
        Country you will receive funds in:
        <span class="text-danger">*</span>
      </label>
      <Dropdown
        :options="countryOptions"
        :disabled="false"
        name="countdrop"
        :maxItem="256"
        placeholder="Country"
        ref="countdropdown"
        v-on:selected="onCountry"
      ></Dropdown>
      <div class="row">
        <div class="m-2">
          <input type="radio" id="individual" name="account" checked class="mr-2" />
          <label for="individual">Individual Account</label>
        </div>
        <div class="m-2">
          <input type="radio" id="company" name="account" class="mr-2" />
          <label for="company">Company Account</label>
        </div>
      </div>
      <div style="height: 10px"></div>
      <form>
        <div class="light-green p-2">Account Holder Information</div>
        <div class="row mt-4">
          <div class="col col-md-3">
            <label for="fn">
              First Name
              <span class="text-danger">*</span>
            </label>
            <input type="text" id="fn" placeholder="First Name" class="form-control" />
          </div>

          <div class="col col-md-3">
            <label for="ln">
              Last Name
              <span class="text-danger">*</span>
            </label>
            <input type="text" id="ln" placeholder="Last Name" class="form-control" />
          </div>
          <div class="col-md-6"></div>
        </div>
        <div class="row mt-3">
          <div class="col col-md-6">
            <label for="email">
              Email
              <span class="text-danger">*</span>
            </label>
            <input type="email" id="email" placeholder="Email" class="form-control" />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col col-md-6">
            <label for="phone">
              Phone
              <span class="text-danger">*</span>
            </label>
            <input type="tel" id="phone" placeholder="Phone Number" class="form-control" />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col col-md-6">
            <label for="phone">
              Date of Birth
              <span class="text-danger">*</span>
            </label>
            <div class="row pl-2 pr-1">
              <!-- MONTHS -->
              <select class="form-control col-md-4 mb-2">
                <option value="0">Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <!-- DAYS -->
              <select class="form-control col-md-4 mb-2">
                <option value="0">Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <!-- YEARS -->
              <select class="form-control col-md-4">
                <option value="0">Year</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
                <option value="1938">1938</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1935">1935</option>
                <option value="1934">1934</option>
                <option value="1933">1933</option>
                <option value="1932">1932</option>
                <option value="1931">1931</option>
                <option value="1930">1930</option>
                <option value="1929">1929</option>
                <option value="1928">1928</option>
                <option value="1927">1927</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1924">1924</option>
                <option value="1923">1923</option>
                <option value="1922">1922</option>
                <option value="1921">1921</option>
                <option value="1920">1920</option>
                <option value="1919">1919</option>
                <option value="1918">1918</option>
                <option value="1917">1917</option>
                <option value="1916">1916</option>
                <option value="1915">1915</option>
                <option value="1914">1914</option>
                <option value="1913">1913</option>
                <option value="1912">1912</option>
                <option value="1911">1911</option>
                <option value="1910">1910</option>
                <option value="1909">1909</option>
                <option value="1908">1908</option>
                <option value="1907">1907</option>
                <option value="1906">1906</option>
                <option value="1905">1905</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col col-md-6">
            <label>
              Last 4 Digits of Social Security Number
              <span class="text-danger">*</span>
              <a href="#" target="_blank" rel="noopener noreferrer">(Why do we need this ?)</a>
            </label>
            <input type="text" placeholder="xxxx" class="form-control" />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col col-md-6">
            <label>
              Address:
              <span class="text-danger">*</span>
            </label>
            <input type="text" placeholder="Address Line 1" class="form-control mb-2" />
            <input type="text" placeholder="Address Line 2" class="form-control mb-2" />
            <input type="text" placeholder="City" class="form-control mb-2" />
            <!-- <select>
                <option value="0">Select Region</option>
            </select>-->
            <input type="text" placeholder="State/Region" class="form-control mb-2" />
            <input type="text" placeholder="Zip" class="form-control mb-2" />
          </div>
        </div>
        <div class="light-green p-2 mt-3 mb-3">Bank Account Information</div>
        <label>Your net earnings will be deposited to this account</label>
        <br />
        <label>Account Info</label>
        <div class="row">
          <div class="m-2">
            <input type="radio" id="b" name="bank" checked class="mr-2" />
            <label for="b">Checking</label>
          </div>
          <div class="m-2">
            <input type="radio" id="c" name="bank" class="mr-2" />
            <label for="c">Savings</label>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col col-md-6">
            <label>Routing Number</label>
            <input type="text" placeholder="Routing Number" class="form-control" />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col col-md-6">
            <label>Account Number</label>
            <input type="text" placeholder="xxxx" class="form-control" />
            <div
              style="width: 100%; height: 150px; background-color: blue; margin-top: 10px; color: white"
            >To Be Added Later</div>
          </div>
        </div>
        <div class="light-green p-2 mt-3 mb-3">Credit Card Statement Details</div>

        <p>
          This information will appear on your attendees' credit card statements. Use the name for your event
          that your attendees will recognize to help prevent unintended chargebacks.
        </p>
        <div class="col col-md-6">
          <label>
            Your Event Name
            <span class="text-danger">*</span>(max character limit 22; preferably short and easy to recognize)
          </label>
          <input type="text" placeholder="e.g. AGRIBUS2020" />
        </div>
        <div class="light-green p-2 mt-3 mb-3">Agreement and Save</div>
        <div class="row pl-2">
          <input type="checkbox" id="agree" class="mr-2" />
          <label for="agree">
            I have read and accept the
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >Stripe Connected Account Agreement</a>
          </label>
        </div>
        <button type="submit" class="btn btn-success pl-4 pr-4 float-right">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
import Dropdown from "vue-simple-search-dropdown";
import countries from "../utils/countries";
export default {
  name: "PaymentInfo",
  components: {
    Dropdown
  },

  data() {
    return {
      countryOptions: countries
    };
  },

  methods: {
    onCountry(country) {
      console.log(country);
    }
  }
};
</script>

<style scoped>
label:not(.form-check-label):not(.custom-file-label) {
  font-weight: normal;
}

label {
  margin-bottom: 0;
}

.dropdown[data-v-6149e08a] {
  position: relative;
  display: block;
  width: 50%;
  margin: 0;
}

.light-green {
  background-color: rgb(170, 243, 96);
}

h3 {
  font-size: 1.2rem !important;
}

/* RESPONSIVE */

@media (max-width: 420px) {
  .dropdown[data-v-6149e08a] {
    position: relative;
    display: block;
    width: 100%;
    margin: 0;
  }
}
</style>