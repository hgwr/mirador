import React from 'react';
import { shallow } from 'enzyme';
import WorkspaceElastic from '../../../src/components/WorkspaceElastic';

/** create wrapper */
function createWrapper(props) {
  return shallow(
    <WorkspaceElastic
      windows={{}}
      workspace={{
        viewportPosition: {
          x: 20,
          y: 20,
        },
      }}
      setWorkspaceViewportPosition={() => {}}
      setWindowSize={() => {}}
      updateWindowPosition={() => {}}
      {...props}
    />,
  );
}

describe('WorkspaceElastic', () => {
  const windows = { 1: { id: 1 }, 2: { id: 2 } };
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(windows);
  });
  it('should render properly with an initialValue', () => {
    wrapper.debug();
  });
  describe('window behaviour', () => {
    it('when windows are dragged', () => {
      wrapper = createWrapper({ windows });
      expect(wrapper);
    });
    it('when windows are resized', () => {
      wrapper = createWrapper();
      expect(wrapper);
    });
  });
  describe('workspace behaviour', () => {
    it('when workspace itself is dragged', () => {
      wrapper = createWrapper();
      expect(wrapper);
    });
  });
});
