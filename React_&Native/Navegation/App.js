import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import DrawerNavigator from './src/navigation/DrawerNavigation';

import BottomTabs from './src/navigation/BottomTab';
import StackNavigator from './src/navigation/StackNavigator';
import TopTabs from './src/navigation/TopTabs';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={ queryClient }>      
      <DrawerNavigator />
    </QueryClientProvider>

    // <TopTabs />
    // <StackNavigator />
    // <BottomTabs />
  );
};