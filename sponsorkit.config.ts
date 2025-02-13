import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  github: {
    login: 'toyobayashi',
    type: 'user',
  },
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: {
        avatar: {
          size: 20,
        },
        boxWidth: 22,
        boxHeight: 22,
        container: {
          sidePadding: 35,
        },
      },
    },
    {
      title: 'Backers',
      preset: tierPresets.base,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 5,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      }
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 50,
      preset: tierPresets.medium,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 250,
      preset: tierPresets.large,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 500,
      preset: tierPresets.xl,
    }
  ]
})
