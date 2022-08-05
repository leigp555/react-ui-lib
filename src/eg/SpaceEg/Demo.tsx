import React from 'react';
import { Button, Space } from '../../lib';

export const Demo: React.FC = () => {
  return (
    <div className="Eg">
      <div className="showEg">
        <div style={{ border: '1px solid rgba(0,0,0,.1)' }}>
          <Space>
            <div>
              <Button>Start</Button>
            </div>
            <div>
              <Button>Start</Button>
            </div>
            <div style={{ height: '100px', backgroundColor: 'orange', padding: '20px 0' }}>
              Start
            </div>
          </Space>
        </div>
        <div style={{ border: '1px solid rgba(0,0,0,.1)' }}>
          <Space size={8} align="center" direction="row">
            <div>
              <Button>Center</Button>
            </div>
            <div>
              <Button>Center</Button>
            </div>
            <div style={{ height: '100px', backgroundColor: 'orange', padding: '20px 0' }}>
              Center
            </div>
          </Space>
        </div>
        <div style={{ border: '1px solid rgba(0,0,0,.1)' }}>
          <Space size={8} align="end" direction="row">
            <div>
              <Button>End</Button>
            </div>
            <div>
              <Button>End</Button>
            </div>
            <div style={{ height: '100px', backgroundColor: 'orange', padding: '20px 0' }}>End</div>
          </Space>
        </div>
        <div style={{ border: '1px solid rgba(0,0,0,.1)' }}>
          <Space size={8} align="baseline" direction="row">
            <div>
              <Button>Baseline</Button>
            </div>
            <div>
              <Button>Baseline</Button>
            </div>
            <div style={{ height: '100px', backgroundColor: 'orange', padding: '20px 0' }}>
              Baseline
            </div>
          </Space>
        </div>
        <div style={{ height: '200px', border: '1px solid rgba(0,0,0,.1)' }}>
          <Space direction="column">
            <div>
              <Button>Row</Button>
            </div>
            <div>
              <Button>Row</Button>
            </div>
            <div style={{ height: '100px', backgroundColor: 'orange', padding: '20px 0' }}>Row</div>
          </Space>
        </div>
      </div>
    </div>
  );
};
