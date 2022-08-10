import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
// import Clock from './pages/Clock';
// import AnimatedCountDown from './pages/AnimatedCountdown';
// import AnimatedNavigation from './pages/AnimatedNavigation';
// import AutoTextEffect from './pages/AutoTextEffect';
// import BackgroundSlider from './pages/BackgroundSlider';
// import BlurryLoading from './pages/BlurryLoading';
// import ButtonRippleEffect from './pages/ButtonRippleEffect';
// import ContentPlaceholder from './pages/ContentPlaceholder';
// import CustomRangeSlider from './pages/CustomRangeSlider';
// import DadJokes from './pages/DadJokes';
// import DoubleClickHeart from './pages/DoubleClickHeart';
// import DoubleVerticalSlider from './pages/DoubleVerticalSlider';
// import Main from './pages/Main';
const Main = lazy(() => import('./pages/Main'));
const AnimatedCountDown = lazy(() => import('./pages/AnimatedCountdown'));
const AnimatedNavigation = lazy(() => import('./pages/AnimatedNavigation'));
const AutoTextEffect = lazy(() => import('./pages/AutoTextEffect'));
const BackgroundSlider = lazy(() => import('./pages/BackgroundSlider'));
const BlurryLoading = lazy(() => import('./pages/BlurryLoading'));
const ButtonRippleEffect = lazy(() => import('./pages/ButtonRippleEffect'));
const ContentPlaceholder = lazy(() => import('./pages/ContentPlaceholder'));
const CustomRangeSlider = lazy(() => import('./pages/CustomRangeSlider'));
const DadJokes = lazy(() => import('./pages/DadJokes'));
const DoubleClickHeart = lazy(() => import('./pages/DoubleClickHeart'));
const DoubleVerticalSlider = lazy(() => import('./pages/DoubleVerticalSlider'));
const Loading = lazy(() => import('./components/loading'));
const DragNDrop = lazy(() => import('./pages/DragNDrop'));
const DrawingApp = lazy(() => import('./pages/DrawingApp'));
const DrinkWater = lazy(() => import('./pages/DrinkWater'));
const EventKeyCodes = lazy(() => import('./pages/EventKeyCodes'));

function App() {
  return (
    <HashRouter >
      {/* <Clock /> */}
      {/* <AnimatedCountDown num={3} /> */}
      {/* <AnimatedNavigation /> */}
      {/* <AutoTextEffect /> */}
      {/* <BackgroundSlider /> */}
      {/* <BlurryLoading /> */}
      {/* <ButtonRippleEffect /> */}
      {/* <ContentPlaceholder /> */}
      {/* <CustomRangeSlider /> */}
      {/* <DadJokes /> */}
      {/* <DoubleClickHeart /> */}
      {/* <DoubleVerticalSlider /> */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/AnimatedCountDown' element={<AnimatedCountDown num={3} />} />
          <Route path='/AnimatedNavigation' element={<AnimatedNavigation />} />
          <Route path='/AutoTextEffect' element={<AutoTextEffect />} />
          <Route path='/BackgroundSlider' element={<BackgroundSlider />} />
          <Route path='/BlurryLoading' element={<BlurryLoading />} />
          <Route path='/ButtonRippleEffect' element={<ButtonRippleEffect />} />
          <Route path='/ContentPlaceholder' element={<ContentPlaceholder />} />
          <Route path='/CustomRangeSlider' element={<CustomRangeSlider />} />
          <Route path='/DadJokes' element={<DadJokes />} />
          <Route path='/DoubleClickHeart' element={<DoubleClickHeart />} />
          <Route path='/DoubleVerticalSlider' element={<DoubleVerticalSlider />} />
          <Route path='/DragNDrop' element={<DragNDrop />} />
          <Route path='/DrawingApp' element={<DrawingApp />} />
          <Route path='/DrinkWater' element={<DrinkWater />} />
          <Route path='/EventKeyCodes' element={<EventKeyCodes />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>

    </HashRouter>
  );

}

export default App;
