<script setup lang="ts">
import {DateTime} from 'luxon';

defineProps<{
  date: DateTime
}>();
</script>

<template>
  <span class="date">{{ date.toFormat('y') }}</span>
</template>
