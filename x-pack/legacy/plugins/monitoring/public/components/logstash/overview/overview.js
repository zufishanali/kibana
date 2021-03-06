/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React, { PureComponent } from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPanel,
  EuiSpacer,
  EuiFlexGrid,
  EuiFlexItem,
} from '@elastic/eui';
import { ClusterStatus } from '../cluster_status';
import { MonitoringTimeseriesContainer } from '../../chart';

export class Overview extends PureComponent {
  render() {
    const { stats, metrics, ...props } = this.props;
    const metricsToShow = [
      metrics.logstash_cluster_events_input_rate,
      metrics.logstash_cluster_events_output_rate,
      metrics.logstash_cluster_events_latency,
    ];

    return (
      <EuiPage>
        <EuiPageBody>
          <EuiPanel>
            <ClusterStatus stats={stats} />
          </EuiPanel>
          <EuiSpacer size="m" />
          <EuiPageContent>
            <EuiFlexGrid columns={2} gutterSize="s">
              {metricsToShow.map((metric, index) => (
                <EuiFlexItem key={index}>
                  <MonitoringTimeseriesContainer series={metric} {...props} />
                  <EuiSpacer />
                </EuiFlexItem>
              ))}
            </EuiFlexGrid>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    );
  }
}
