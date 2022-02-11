import React, { useState } from 'react';
import { Tab, Tabs } from '@components/TabMenu/TabMenu';
import { IChangeEventProps } from '@components/TabMenu/TabMenuType';
import useStreamingPage from './useStreamingPage';
import CameraSetting from './CameraSetting';
import AudioSetting from './AudioSetting';
import * as STC from './StreamingPage.style';
import DetailSetting from './DetailSetting';
import Broadcasting from './Broadcasting';
import ExternalOnboarding from './ExternalOnboarding';

const StreamingPage = () => {
  const {
    viewRef,
    cameras,
    audios,
    step,
    constraint,
    cameraOptions,
    cameraValue,
    audioOptions,
    audioValue,
    categoryOptions,
    category,
    broadDetail,
    broadTitle,
    detailDisable,
    endModal,
    errorEndModal,
    videoComponent,
    titlePlaceholder,
    multiRtmpDestination,
    externalTriggerFalse,
    handleStart,
    handleFinish,
    handleSelect,
    handleSourceToggle,
    setStep,
    handleBroadCategory,
    handleBroadDetail,
    handleBroadTitle,
    handleBroadData,
    handleEdit,
    setEndModal,
    setErrorEndModal,
    handleMultiRtmpDestination,
    handleAddRtmp,
    handleRemoveRtmp,
    handleMultiStreamToggle,
  } = useStreamingPage();

  return (
    <STC.Container isOnboarding={step === 'onboarding'}>
      {step === 'onboarding' && <ExternalOnboarding handleClick={() => setStep('broadcast')} />}
      {step === 'camera' && (
        <CameraSetting
          viewRef={viewRef}
          handleSelect={handleSelect}
          setStep={(step: string) => setStep(step)}
          cameraOptions={cameraOptions}
          cameraValue={cameraValue}
        />
      )}

      {step === 'audio' && (
        <AudioSetting
          handleSelect={handleSelect}
          setStep={(step: string) => setStep(step)}
          audioOptions={audioOptions}
          audioValue={audioValue}
        />
      )}
      {step === 'detail' && (
        <DetailSetting
          viewRef={viewRef}
          setStep={(step: string) => setStep(step)}
          vodCategoryOptions={categoryOptions}
          broadCategory={category}
          broadDetail={broadDetail}
          broadTitle={broadTitle}
          detailDisable={detailDisable}
          titlePlaceholder={titlePlaceholder}
          handleBroadCategory={handleBroadCategory}
          handleBroadDetail={handleBroadDetail}
          handleBroadTitle={handleBroadTitle}
          handleMultiRtmpDestination={handleMultiRtmpDestination}
          multiRtmpDestination={multiRtmpDestination}
          externalTriggerFalse={externalTriggerFalse}
          handleAddRtmp={handleAddRtmp}
          handleRemoveRtmp={handleRemoveRtmp}
          handleMultiStreamToggle={handleMultiStreamToggle}
        />
      )}
      {step === 'broadcast' && (
        <Broadcasting
          viewRef={viewRef}
          constraint={constraint}
          cameras={cameras}
          audios={audios}
          broadCategory={category}
          broadDetail={broadDetail}
          broadTitle={broadTitle}
          vodCategoryOptions={categoryOptions}
          endModal={endModal}
          errorEndModal={errorEndModal}
          titlePlaceholder={titlePlaceholder}
          handleStart={handleStart}
          handleBroadCategory={handleBroadCategory}
          handleBroadDetail={handleBroadDetail}
          handleBroadTitle={handleBroadTitle}
          handleBroadData={handleBroadData}
          handleFinish={handleFinish}
          handleEdit={handleEdit}
          handleSourceToggle={handleSourceToggle}
          videoComponent={videoComponent}
          setEndModal={setEndModal}
          setErrorEndModal={setErrorEndModal}
        />
      )}
    </STC.Container>
  );
};

export default StreamingPage;
