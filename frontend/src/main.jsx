import { createRoot } from 'react-dom/client';

import RootApp from './RootApp';

console.log('✅ React app is trying to mount...');  // Add this line

const root = createRoot(document.getElementById('root'));
root.render(<RootApp />);
