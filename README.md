# Mustafizur Rahman — Android App

A mobile-first personal brand app packaged for Android with Capacitor.

## Included
- Personal profile and introduction
- Blog and poetry section
- Books and PDF links
- Video and audio links
- Notice board
- Contact form (opens the device email app)
- Local admin panel for adding content
- Dark/light theme
- GitHub Actions workflow to build a debug APK

## Build the APK for free with GitHub Actions
1. Create a new GitHub repository named `mustafizur-rahman-app`.
2. Upload all files and folders from this project ZIP to the repository root.
3. Open the repository's **Actions** tab.
4. Select **Build Android APK** and tap **Run workflow** (or push to `main`).
5. When the run finishes, open the completed workflow run and download the artifact named `Mustafizur-Rahman-Android-APK`.
6. Extract the ZIP artifact. It contains `app-debug.apk`. Download it to your Android phone and install it. Android may ask you to allow installation from that source.

## Admin panel
- Open the app and go to **অ্যাডমিন**.
- Initial PIN: `2468`. Change it immediately after first login.
- Content and PIN are stored locally on that device only.

## Important limitations of this starter version
- This is a first, offline-friendly version. The local PIN is not server-grade security.
- Content added on one device does not automatically appear on another device.
- The contact form opens the email app; it does not send automatically.
- Replace the sample biography and starter cards with your final content.
- Do not add private credentials or sensitive information to the app source.

## App identity
- Display name: Mustafizur Rahman
- Android application ID: `com.mustafizurrahman.app`
