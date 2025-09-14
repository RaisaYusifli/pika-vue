<script setup lang="ts">
import { Card, CardContent, CardHeader } from '../ui/card';
import { Pokemon, Hamburger, Search } from '../../assets/index'
import {Input} from '../ui/index';

import { useLocale } from '@/vue/i18n';

const { t } = useLocale()
</script>

<template>
    <Card class="bg-[#FED873] rounded-b-[20px] px-[200px] pt-20 pb-[100px]">
      <CardHeader>
        <nav class="flex justify-between items-center gap-8">
          <span class="font-semibold">{{ t('pika.title') }}</span>
          <img :src="Pokemon" alt="Pika Logo" class="w-[100px]" />
          <button class="border-none bg-transparent cursor-pointer">
            <img :src="Hamburger" alt="Menu" />
          </button>
        </nav>
      </CardHeader>
      <CardContent class="mt-16">
        <div class="relative w-full">
          <img 
            :src="Search" 
            alt="Search" 
            class="absolute left-[15px] top-1/2 -translate-y-1/2 w-5 h-5 z-[1]"
          />
          <Input 
            type="search" 
            :placeholder="t('pika.search.placeholder')"
            class="w-full py-5 pl-[45px] pr-5 rounded-[20px] border border-gray-300 bg-[#F9F9F9]"
          />
        </div>
      </CardContent>
    </Card>
</template>