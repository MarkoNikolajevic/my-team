export interface Testimonial {
  avatar: string;
  name: string;
  role: string;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    avatar: '/avatars/avatar-kady.jpg',
    name: 'Kady Baker',
    role: 'Product Manager at Bookmark',
    comment: ' “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”'
  },
  {
    avatar: '/avatars/avatar-aiysha.jpg',
    name: 'Aiysha Reese',
    role: 'Founder of Manage',
    comment: '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”'
  },
  {
    avatar: '/avatars/avatar-arthur.jpg',
    name: 'Arthur Clarke',
    role: 'Co-founder of MyPhysio',
    comment: '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”'
  }
]