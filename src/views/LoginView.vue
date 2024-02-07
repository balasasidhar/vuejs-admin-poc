<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="row vh-100 align-items-center justify-content-center">
      <div class="col-5">
        <div class="card shadow-sm border-light">
          <div class="card-body p-5">
            <h3>Login</h3>
            <p>Hello, Welcome back!</p>
            <hr />
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label fw-medium"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your email"
              />
            </div>
            <div class="mb-3">
              <label for="inputPassword5" class="form-label fw-medium">Password</label>
              <input
                type="password"
                id="inputPassword5"
                class="form-control"
                aria-describedby="passwordHelpBlock"
                placeholder="Enter your password"
              />
            </div>
            <div class="mb-3">
              <div class="row justify-content-between">
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-link">Forgot Password?</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
