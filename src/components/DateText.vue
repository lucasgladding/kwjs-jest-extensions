<script setup lang="ts">
import {DateTime} from 'luxon';

defineProps<{
  date: DateTime,
}>();
</script>

<template>
  <div>{{date.toFormat('y')}}</div>
</template>
