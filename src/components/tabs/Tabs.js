import React from 'react';
import TabsContent from '../tabs-content/TabsContent';
import data from '../../json/tabs.json';

class Tabs extends React.Component {
    state = {
        activeTabIndex: 0,
    };

    changeTab = (id) => {
        this.setState({
            activeTabIndex: id,
        });
    };

    render() {
        const activeTabsContent = data.tabs[this.state.activeTabIndex];

        return (
            <div>
                <div>
                    {data.tabs.map((tab, index) => (
                        <button
                            style={{
                                backgroundColor:
                                    index === this.state.activeTabIndex
                                        ? 'green'
                                        : 'red',
                            }}
                            key={tab.id}
                            onClick={() => this.changeTab(tab.id - 1)}
                        >{`tab-${index + 1}`}</button>
                    ))}
                </div>

                <div>
                    <TabsContent
                        title={activeTabsContent.title}
                        text={activeTabsContent.text}
                    />
                </div>
            </div>
        );
    }
}

export default Tabs;
