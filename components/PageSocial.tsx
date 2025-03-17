import type * as React from 'react'
import cs from 'classnames'

import * as config from '@/lib/config'

import styles from './PageSocial.module.css'

interface SocialLink {
  name: string
  title: string
  icon: React.ReactNode
  href?: string
}

const socialLinks: SocialLink[] = [
  config.instagram && {
    name: 'instagram',
    href: `https://instagram.com/${config.instagram}`,
    title: `instagram @${config.instagram}`,
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M13 10a3 3 0 1 1-6 0q.001-.257.049-.5H6v3.997c0 .278.225.503.503.503h6.995a.503.503 0 0 0 .502-.503V9.5h-1.049q.048.243.049.5m-3 2a2 2 0 1 0-.001-4.001A2 2 0 0 0 10 12m2.4-4.1h1.199a.3.3 0 0 0 .301-.3V6.401a.3.3 0 0 0-.301-.301H12.4a.3.3 0 0 0-.301.301V7.6c.001.165.136.3.301.3M10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 0 0 9.6 9.6a9.6 9.6 0 0 0 9.6-9.6A9.6 9.6 0 0 0 10 .4m5 13.489C15 14.5 14.5 15 13.889 15H6.111C5.5 15 5 14.5 5 13.889V6.111C5 5.5 5.5 5 6.111 5h7.778C14.5 5 15 5.5 15 6.111z"/>
    </svg>
    )
  },
  config.xiaohongshu && {
    name: 'xiaohongshu',
    href: `https://www.xiaohongshu.com/user/profile/${config.xiaohongshu}`,
    title: `xiaohongshu @${config.xiaohongshu}`,
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M22.405 9.879c.002.016.01.02.07.019h.725a.797.797 0 0 0 .78-.972a.794.794 0 0 0-.884-.618a.795.795 0 0 0-.692.794c0 .101-.002.666.001.777m-11.509 4.808c-.203.001-1.353.004-1.685.003a2.5 2.5 0 0 1-.766-.126a.025.025 0 0 0-.03.014L7.7 16.127a.025.025 0 0 0 .01.032c.111.06.336.124.495.124c.66.01 1.32.002 1.981 0q.017 0 .023-.015l.712-1.545a.025.025 0 0 0-.024-.036zM.477 9.91c-.071 0-.076.002-.076.01l-.01.08c-.027.397-.038.495-.234 3.06c-.012.24-.034.389-.135.607c-.026.057-.033.042.003.112c.046.092.681 1.523.787 1.74c.008.015.011.02.017.02c.008 0 .033-.026.047-.044q.219-.282.371-.606c.306-.635.44-1.325.486-1.706c.014-.11.021-.22.03-.33l.204-2.616l.022-.293c.003-.029 0-.033-.03-.034zm7.203 3.757a1.4 1.4 0 0 1-.135-.607c-.004-.084-.031-.39-.235-3.06a.4.4 0 0 0-.01-.082c-.004-.011-.052-.008-.076-.008h-1.48c-.03.001-.034.005-.03.034l.021.293q.114 1.473.233 2.946c.05.4.186 1.085.487 1.706c.103.215.223.419.37.606c.015.018.037.051.048.049c.02-.003.742-1.642.804-1.765c.036-.07.03-.055.003-.112m3.861-.913h-.872a.126.126 0 0 1-.116-.178l1.178-2.625a.025.025 0 0 0-.023-.035l-1.318-.003a.148.148 0 0 1-.135-.21l.876-1.954a.025.025 0 0 0-.023-.035h-1.56q-.017 0-.024.015l-.926 2.068c-.085.169-.314.634-.399.938a.5.5 0 0 0-.02.191a.46.46 0 0 0 .23.378a1 1 0 0 0 .46.119h.59c.041 0-.688 1.482-.834 1.972a.5.5 0 0 0-.023.172a.47.47 0 0 0 .23.398c.15.092.342.12.475.12l1.66-.001q.017 0 .023-.015l.575-1.28a.025.025 0 0 0-.024-.035m-6.93-4.937H3.1a.032.032 0 0 0-.034.033c0 1.048-.01 2.795-.01 6.829c0 .288-.269.262-.28.262h-.74c-.04.001-.044.004-.04.047c.001.037.465 1.064.555 1.263c.01.02.03.033.051.033c.157.003.767.009.938-.014c.153-.02.3-.06.438-.132c.3-.156.49-.419.595-.765c.052-.172.075-.353.075-.533q.003-3.495-.007-6.991a.03.03 0 0 0-.032-.032zm11.784 6.896q-.002-.02-.024-.022h-1.465c-.048-.001-.049-.002-.05-.049v-4.66c0-.072-.005-.07.07-.07h.863c.08 0 .075.004.075-.074V8.393c0-.082.006-.076-.08-.076h-3.5c-.064 0-.075-.006-.075.073v1.445c0 .083-.006.077.08.077h.854c.075 0 .07-.004.07.07v4.624c0 .095.008.084-.085.084c-.37 0-1.11-.002-1.304 0c-.048.001-.06.03-.06.03l-.697 1.519s-.014.025-.008.036s.013.008.058.008q2.622.003 5.243.002c.03-.001.034-.006.035-.033zm4.177-3.43q0 .021-.02.024c-.346.006-.692.004-1.037.004q-.021-.003-.022-.024q-.006-.651-.01-1.303c0-.072-.006-.071.07-.07l.733-.003c.041 0 .081.002.12.015c.093.025.16.107.165.204c.006.431.002 1.153.001 1.153m2.67.244a1.95 1.95 0 0 0-.883-.222h-.18c-.04-.001-.04-.003-.042-.04V10.21q.001-.198-.025-.394a1.8 1.8 0 0 0-.153-.53a1.53 1.53 0 0 0-.677-.71a2.2 2.2 0 0 0-1-.258c-.153-.003-.567 0-.72 0c-.07 0-.068.004-.068-.065V7.76c0-.031-.01-.041-.046-.039H17.93s-.016 0-.023.007q-.008.008-.008.023v.546c-.008.036-.057.015-.082.022h-.95c-.022.002-.028.008-.03.032v1.481c0 .09-.004.082.082.082h.913c.082 0 .072.128.072.128v1.148s.003.117-.06.117h-1.482c-.068 0-.06.082-.06.082v1.445s-.01.068.064.068h1.457c.082 0 .076-.006.076.079v3.225c0 .088-.007.081.082.081h1.43c.09 0 .082.007.082-.08v-3.27c0-.029.006-.035.033-.035l2.323-.003a.7.7 0 0 1 .28.061a.46.46 0 0 1 .274.407c.008.395.003.79.003 1.185c0 .259-.107.367-.33.367h-1.218c-.023.002-.029.008-.028.033q.276.655.57 1.303a.05.05 0 0 0 .04.026c.17.005.34.002.51.003c.15-.002.517.004.666-.01a2 2 0 0 0 .408-.075c.59-.18.975-.698.976-1.313v-1.981q.001-.191-.034-.38c0 .078-.029-.641-.724-.998"/>
    </svg>
    )
  },
  // config.github && {
  //   name: 'github',
  //   href: `https://github.com/${config.github}`,
  //   title: `GitHub @${config.github}`,
  //   icon: (
  //     <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
  //       <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
  //     </svg>
  //   )
  // },

  config.linkedin && {
    name: 'linkedin',
    href: `https://www.linkedin.com/in/${config.linkedin}`,
    title: `LinkedIn ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z' />
      </svg>
    )
  },

  config.newsletter && {
    name: 'newsletter',
    href: `${config.newsletter}`,
    title: `Newsletter ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M12 .64L8.23 3H5V5L2.97 6.29C2.39 6.64 2 7.27 2 8V18C2 19.11 2.9 20 4 20H20C21.11 20 22 19.11 22 18V8C22 7.27 21.61 6.64 21.03 6.29L19 5V3H15.77M7 5H17V9.88L12 13L7 9.88M8 6V7.5H16V6M5 7.38V8.63L4 8M19 7.38L20 8L19 8.63M8 8.5V10H16V8.5Z' />
      </svg>
    )
  },

  config.youtube && {
    name: 'youtube',
    href: `https://www.youtube.com/${config.youtube}`,
    title: `YouTube ${config.youtube}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z' />
      </svg>
    )
  }
].filter(Boolean)

export function PageSocial() {
  return (
    <div className={styles.pageSocial}>
      {socialLinks.map((action) => (
        <a
          className={cs(styles.action, styles[action.name])}
          href={action.href}
          key={action.name}
          title={action.title}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={styles.actionBg}>
            <div className={styles.actionBgPane} />
          </div>

          <div className={styles.actionBg}>{action.icon}</div>
        </a>
      ))}
    </div>
  )
}
