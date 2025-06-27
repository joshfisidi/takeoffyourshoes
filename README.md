# Take Off Your Shoes Sign

A beautiful, mobile-responsive web application featuring a "Take Off Your Shoes" sign with a dynamic photo marquee background. Built with vanilla JavaScript, Tailwind CSS, and Supabase Storage.

## Features

- 🏠 **Interactive Card Modal**: Beautiful "Take Off Your Shoes" sign with animations
- 📱 **Mobile-First Design**: Fully responsive across all devices and screen sizes
- 🖼️ **Dynamic Photo Marquee**: 4-row scrolling photo background from Supabase Storage
- ⚡ **Cross-Browser Compatible**: Works on all modern browsers with vendor prefixes
- 🎯 **Touch-Friendly**: Optimized for mobile interactions with swipe gestures
- ♿ **Accessible**: Full keyboard navigation and screen reader support

## Mobile Optimizations

- **Touch Gestures**: Swipe down to close the modal
- **Responsive Images**: Smaller images on mobile for better performance
- **Optimized Animations**: Faster marquee speed on mobile devices
- **Prevent Zoom**: Disabled user scaling for better mobile experience
- **Smooth Scrolling**: iOS-optimized scrolling behavior

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)
- ❌ Internet Explorer 11 (not supported)

## Setup Instructions

### 1. Prerequisites

- Node.js 14+ installed
- Supabase account with a storage bucket

### 2. Clone and Install

```bash
git clone https://github.com/joshfisidi/takeoffyourshoes.git
cd takeoffyourshoes
npm install
```

### 3. Configure Supabase

1. Create a new Supabase project
2. Create a storage bucket named `guma` (or update the bucket name in `marquee.js`)
3. Make the bucket public:
   - Go to Storage → Buckets → `guma` → Policies
   - Click "New Policy" → "Anyone can read"
   - Save the policy

### 4. Update Configuration

Edit `marquee.js` and update these values:

```javascript
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const bucketName = 'guma'; // or your bucket name
```

### 5. Upload Photos

Upload your photos to the Supabase storage bucket. The app will automatically fetch and display them in the marquee.

### 6. Run the Application

```bash
npm start
```

Open `http://localhost:3000` in your browser.

## File Structure

```
├── index.html          # Main HTML file with mobile optimizations
├── card.js            # Modal card component with touch support
├── marquee.js         # Photo marquee with Supabase integration
├── server.js          # Express server for local development
├── package.json       # Dependencies and scripts
└── README.md          # This file
```

## Troubleshooting

### Photos Not Loading

1. **Check Bucket Policy**: Ensure your Supabase bucket has public read access
2. **Verify URLs**: Check browser console for 401/403 errors
3. **Test Direct URL**: Try accessing a photo URL directly in your browser
4. **Check Network Tab**: Look for failed image requests in browser dev tools

### Mobile Issues

1. **Touch Not Working**: Ensure you're using a modern browser
2. **Slow Performance**: Check if too many images are being loaded
3. **Layout Issues**: Verify viewport meta tag is present

### Cross-Browser Issues

1. **Animations Not Working**: Check if CSS animations are supported
2. **JavaScript Errors**: Ensure ES6+ features are supported
3. **Styling Issues**: Verify Tailwind CSS is loading properly

## Customization

### Change Colors
Edit the gradient classes in `index.html`:
```html
<body class="bg-gradient-to-br from-indigo-400 to-purple-500">
```

### Modify Card Content
Edit the card HTML in `card.js`:
```javascript
cardWrapper.innerHTML = `
  // Your custom content here
`;
```

### Adjust Marquee Speed
Edit the animation durations in `index.html`:
```css
.marquee-row {
  animation: marquee-left 30s linear infinite;
}
```

## Performance Tips

- **Image Optimization**: Use compressed images (JPEG/WebP) for faster loading
- **Lazy Loading**: Images are loaded with `loading="lazy"` attribute
- **Error Handling**: Failed images are automatically hidden
- **Fallback Images**: Placeholder images load if Supabase is unavailable

## License

ISC License - feel free to use this project for your own needs!

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple devices and browsers
5. Submit a pull request

---

**Note**: This application is designed to work with Supabase Storage. Make sure your bucket is properly configured and public for the photo marquee to function correctly.
