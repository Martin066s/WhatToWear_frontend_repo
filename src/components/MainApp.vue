<template>
  <div class="macbook-pro">
    <div class="div">
      <div class="overlap-group">
        <div class="label-header">WhatToWear</div>
        <div class="frame" />
      </div>
      <Component :is="component-1" />
      <div class="text-wrapper-2">Location</div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-duplicates
import component from '@/components/Component.vue'
// eslint-disable-next-line import/no-duplicates
import Component from '@/components/Component.vue'

export default {
  name: 'MacbookPro',
  computed: {
    component () {
      return component
    }
  },
  components: {
    Component
  }
}
</script>

<style>
.macbook-pro {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.macbook-pro .div {
  background-color: #ffffff;
  height: 982px;
  position: relative;
  width: 1512px;
}

.macbook-pro .overlap-group {
  height: 105px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1512px;
}

.macbook-pro .label-header {
  color: #1b49ec;
  font-family: "Inter-Regular", Helvetica;
  font-size: 40px;
  font-weight: 400;
  left: 623px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 34px;
  white-space: nowrap;
  width: 250px;
}

.macbook-pro .frame {
  background-color: #27de9c;
  height: 105px;
  left: 0;
  mix-blend-mode: darken;
  position: absolute;
  top: 0;
  width: 1512px;
}

.macbook-pro .component-1 {
  left: 606px !important;
  position: absolute !important;
  top: 168px !important;
}

.macbook-pro .text-wrapper-2 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 40px;
  font-weight: 400;
  left: 663px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 646px;
  width: 190px;
}
</style>
