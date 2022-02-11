import React, { useRef, useEffect, useState } from 'react';
import { ITabProps, ITabsProps } from './TabMenuType';
import * as STC from './TabMenu.style';

export const Tab = ({ label, active, value, onClick }: ITabProps) => {
  return (
    <STC.StylizedTab role="tab" active={active} onClick={onClick}>
      {label}
    </STC.StylizedTab>
  );
};

export const Tabs = ({ selectedTab, onChange, children }: ITabsProps) => {
  const containerRef = useRef<any>();
  const [containerWidth, setContainerWidth] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);

  const handleWidth = () => {
    setContainerWidth(containerRef?.current.getBoundingClientRect().width);
  };

  useEffect(() => {
    if (containerRef) {
      handleWidth();
    }
  }, [containerRef]);

  useEffect(() => {
    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, []);

  useEffect(() => {
    setSliderWidth(containerWidth / children.length);
  }, [containerWidth]);

  const tabs = children?.map((child) => {
    const handleClick = () => {
      onChange(child.props.value);
    };

    return React.cloneElement(child, {
      key: child.props.value,
      active: child.props.value === selectedTab,
      onClick: handleClick,
    });
  });

  return (
    <STC.TabHeaderContainer ref={containerRef}>
      <STC.TabSlider width={sliderWidth} index={selectedTab} />
      <STC.TabsHolder>{tabs}</STC.TabsHolder>
    </STC.TabHeaderContainer>
  );
};
