<template>
<div> 
    <nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand"  href="#"> Galleries </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

      <li class="nav-item active">
        <router-link class="nav-link" to="/galleries"> All Galleries </router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/login"> Login </router-link>
      </li>

       <li class="nav-item">
        <router-link class="nav-link" to="/register"> Register </router-link>
      </li>
     
      
    </ul>
  </div>
</nav>
</div>
</template>




<script>
export default {
    
}
</script>