import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Respct.Club',
  description: 'Web3 Platform for creators',
  image: 'https://app.respct.club/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Respct.Club')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Respct.Club')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Respct.Club')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Respct.Club')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Respct.Club')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Respct.Club')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Respct.Club')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Respct.Club')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Respct.Club')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Respct.Club')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Respct.Club')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Respct.Club')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Respct.Club')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Respct.Club')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Respct.Club')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Respct.Club')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Respct.Club')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Respct.Club')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Respct.Club Info & Analytics')}`,
        description: 'View statistics for Respct.Club exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Respct.Club Info & Analytics')}`,
        description: 'View statistics for Respct.Club exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Respct.Club Info & Analytics')}`,
        description: 'View statistics for Respct.Club exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Respct.Club')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Respct.Club')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('Respct.Club')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Respct.Club')}`,
      }
    default:
      return null
  }
}
