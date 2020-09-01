import {assert} from 'chai'

import { getClient, randomString } from "./testHelpers"
import {Group} from '../microsoft-graph'
import * as MicrosoftGraph from "../microsoft-graph"

declare const describe, it;

describe('Groups', function() {
  this.timeout(10*1000);
  it('Lists all the types', function() {
    console.log(Reflect.enumerate(MicrosoftGraph));
  });

  it('Fetch a list of groups and access properties on a collection item', function() {
    console.log("hits");
  });

  // it('Create a group and validate properties were set', function() {
  //   const group:Group = {
  //       displayName: "Sample test group",
  //       description: randomString(),
  //       groupTypes: [
  //           "Unified"
  //       ],
  //       mailEnabled: true,
  //       mailNickname: "Group911e5",
  //       securityEnabled: true
  //   };

  //   return getClient().api("https://graph.microsoft.com/v1.0/groups/").post(group).then((groupResponse) => {
  //       let createdGroup = groupResponse as Group;
  //       assert.equal(createdGroup.displayName, group.displayName);
  //       assert.equal(createdGroup.description, group.description);
  //       assert.equal(createdGroup.mailEnabled, group.mailEnabled);
  //       assert.isString(createdGroup.id);
  //       return Promise.resolve();
  //   });
  // });
});