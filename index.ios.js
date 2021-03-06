/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');


var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  TabBarIOS
} = React;

var TabBarItemIOS = TabBarIOS.Item;

var TopicList = require('./App/View/TopicList/TopicList');
var NodeMap = require('./App/View/NodeMap/NodeMap');

/*
  dispatch_once(&onceToken, ^{
    systemIcons = @{
      @"more": @(UITabBarSystemItemMore),
      @"favorites": @(UITabBarSystemItemFavorites),
      @"featured": @(UITabBarSystemItemFeatured),
      @"topRated": @(UITabBarSystemItemTopRated),
      @"recents": @(UITabBarSystemItemRecents),
      @"contacts": @(UITabBarSystemItemContacts),
      @"history": @(UITabBarSystemItemHistory),
      @"bookmarks": @(UITabBarSystemItemBookmarks),
      @"search": @(UITabBarSystemItemSearch),
      @"downloads": @(UITabBarSystemItemDownloads),
      @"mostRecent": @(UITabBarSystemItemMostRecent),
      @"mostViewed": @(UITabBarSystemItemMostViewed),
    };
  });
*/

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

var v2er = React.createClass({
    getInitialState: function() {
        return {
            selectedTab: 'latestTab'
        };
    },
    render: function() {
        // console.log('12123123');
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarItemIOS accessibilityLabel={"Latest"}
                    selected={this.state.selectedTab === 'latestTab'}
                    title="latest"
                    name="latestTab"
                    icon={{uri: base64Icon, scale: 3}}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'latestTab'
                        });
                    }}>
                    <NavigatorIOS style={Style.container}
                        tintColor={'#333344'}
                        initialRoute={{
                          title: 'Latest Topic - V2EX',
                          component: TopicList
                        }}
                        itemWrapperStyle={Style.navigator} />
                </TabBarItemIOS>
                <TabBarItemIOS accessibilityLabel={"Nodes"}
                    selected={this.state.selectedTab === 'nodeMap'}
                    title="NodeMap"
                    name="nodeMap"
                    icon={{uri: base64Icon, scale: 3}}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'nodeMap'
                        });
                    }}>
                    <NodeMap />
                </TabBarItemIOS>
            </TabBarIOS>
        );
    }
});

var Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  navigator: {
    backgroundColor: '#EFEFEF'
  }
});

AppRegistry.registerComponent('v2er', () => v2er);
