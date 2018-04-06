import React, { Component } from 'react';

import { Layout } from '../Layout/Layout';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { Scaleline } from '../Scaleline/Scaleline';
import { CalendarArea } from '../CalendarArea/CalendarArea';
import { RoomsArea } from '../RoomsArea/RoomsArea';
import { DiagrammArea } from '../DiagrammArea/DiagrammArea';
import { RoomsList } from '../RoomsList/RoomsList';
import { TimelinesList } from '../TimelinesList/TimelinesList';
import { Hour } from '../Hour/Hour';

import logo from '../../../logo.png';

import { Button } from '../Button/Button';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floated: false,
    };
    this.page = null;
    this.setRef = this.setRef.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    if (this.page) {
      this.page.addEventListener('scroll', this.handleScroll, {
        capture: true,
        passive: true,
      });
    }
  }

  componentWillUnmount() {
    this.page.removeEventListener('scroll', this.handleScroll, {
      capture: true,
      passive: true,
    });
  }

  setRef(node) {
    this.page = node;
  }

  handleScroll() {
    if (this.page.scrollLeft >= 120) {
      this.setState({
        floated: true,
      });
    } else if (this.page.scrollLeft < 120 && this.state.floated) {
      this.setState({ floated: false });
    }
  }

  render() {
    const { floated } = this.state;
    return (
      <Layout innerRef={this.setRef}>
        <Header>
          <img src={logo} alt="logo" className="logo" />
          <Button type="button" primary>
            Создать встречу
          </Button>
        </Header>

        <Scaleline>
          {[
            '8:00',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
          ].map(hour => <Hour key={hour}>{hour}</Hour>)}
        </Scaleline>
        <Content>
          <CalendarArea>
            <RoomsArea floated={floated}>
              <RoomsList
                floated={floated}
                rooms={['Room1', 'Room2', 'Room3']}
              />
            </RoomsArea>
            <DiagrammArea>
              <TimelinesList
                timelines={['Timeline1', 'Timeline2', 'Timeline3']}
              />
            </DiagrammArea>
          </CalendarArea>
        </Content>
      </Layout>
    );
  }
}
