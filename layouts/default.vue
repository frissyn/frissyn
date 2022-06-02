<template>
  <div class="page">
    <div class="navbar bg-base-100 shadow">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <IconDropdown />
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52">
            <li><a href="/"><IconHome /> Homepage</a></li>
            <li><a href="/"><IconBriefcase /> Portfolio</a></li>
            <li><a href="https://github.com/frissyn/frissyn"><IconLogoGitHub /> View Source</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost normal-case text-xl">frissyn.</a>
      </div>
      <div class="navbar-end">
        <a class="btn btn-ghost" title="Instagram"><IconLogoInstagram /></a>
        <a class="btn btn-ghost" title="Twitter"><IconLogoTwitter /></a>
        <a class="btn btn-ghost" title="GitHub"><IconLogoGitHub /></a>
      </div>
    </div>

    <slot />
  </div>
</template>
