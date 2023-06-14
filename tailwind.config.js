/*
 * @Author: kokoro
 * @Date: 2023-05-31 13:17:30
 * @LastEditors: kokoro
 * @LastEditTime: 2023-05-31 13:29:10
 * @Description: 请填写简介
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
  ],
}
