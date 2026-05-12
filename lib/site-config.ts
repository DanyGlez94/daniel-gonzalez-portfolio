// Toggle when ready to publicly signal job search. While false: neutral copy
// across hero, contact, CV, and OG image. Flip this single flag to switch modes.
export const OPEN_TO_WORK = false

export const HERO_BADGE = OPEN_TO_WORK
  ? 'Available for new opportunities'
  : 'Currently shipping in production'

export const CONTACT_INTRO = OPEN_TO_WORK
  ? "I'm open to senior frontend or fullstack roles, technical leadership opportunities, and consulting on complex UI/UX challenges. Let's talk."
  : 'Open to interesting conversations about frontend craft, accessibility, and product engineering. Drop a line.'

export const CV_LOCATION = OPEN_TO_WORK
  ? 'Mexico · Open to remote U.S. roles'
  : 'Mexico · Remote'

export const NAVBAR_CTA = OPEN_TO_WORK ? 'Hire me' : 'Get in touch'
