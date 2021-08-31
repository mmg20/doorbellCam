import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Alert, Image } from 'react-native';
import auth from '@react-native-firebase/auth';


function LogApp() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}

export const Home = () => {

  var base64Icon = 'data:image/png;base64,%2F9j%2F4AAQSkZJRgABAQEAAAAAAAD%2F2wBDAAoHCAkIBgoJCAkLCwoMDxkQDw4ODx8WFxIZJCAmJiQgIyIoLToxKCs2KyIjMkQzNjs9QEFAJzBHTEY%2FSzo%2FQD7%2F2wBDAQsLCw8NDx0QEB0%2BKSMpPj4%2BPj4%2BPj4%2BPj4%2BPj4%2BPj4%2BPj4%2BPj4%2BPj4%2BPj4%2BPj4%2BPj4%2BPj4%2BPj4%2BPj4%2BPj4%2BPj7%2FxAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv%2FxAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5%2Bjp6vHy8%2FT19vf4%2Bfr%2FxAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv%2FxAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4%2BTl5ufo6ery8%2FT19vf4%2Bfr%2FwAARCAB4AKADASEAAhEBAxEB%2F9oADAMBAAIRAxEAPwD2WigAooAKjuG2W0j%2FAN1SaTIqfCzn3ux61AbsVyniJGrok3m%2Bd7Y%2FrWtXRDY9bDfw0FFWbN2CmswRct0pc1jysRX5pFO6vlSL5ax2uN5yTWZzRRk3l2uTVSS8Cx1VjWxi3d5nvVEzc1QHt9FM9sKKACqmqlhpF5sVmfyX2hRkk4pET%2BE4Ay32f%2BQff%2F8AgK9RmS%2F%2FAOgff%2F8AgLJXOcHsJ9jZ8LXV1HqMgns71IzF%2FFbuBnIrqzeqP%2BWU5%2F7ZGrUrFfvo6JDDfjdxBcY9fKaq76o%2Bf3dpc8esLU%2BczdOtIrT6xcDf5dpd%2FwDgO9ZlxqF68Y%2F0S9%2F8B3qdCVhZ9indXt55QC2F8f8At2eqEtzqPlnbp1%2F%2FAOAr1SsV7CfYyz%2FajHJ0zUf%2FAAFkqvdLqu35dL1E%2FwDbo9O8SvY1OxmSWutN%2FwAwjUv%2FAAEkqJrXWR%2FzCNS%2F8BZKeg%2FYSPoCirPRCigAooAKKACigAooAKKACigAooAKKEc2Kly0mwooOkKKACigAooAKKACigAooAKKACihGNSfLYKjmk8tKOhxZnUtT5SSig9MKKACigAooAKKACigAooAKKCJMKKLnBXvLExiFZN7LmbFRI5My%2FimtRVnuhRQAUUAFFABRQAUUAFFBLdgopnPKqvaQQ122rmnVP2jh9svrlyK4lEMRY1gLLvnyaiW5xYmp7So2dJRWh9KFFABRQAUUAFFABRQIKKaOWpUVmFFL7RyTt9YjbsVrrkqtWFGFArJfGedT1m2ZGtSYOKy7YFpM1CZB1lFdB9UFFABRQAUUAFFABRQjnqTCiqlojyq1S8WIxwtHbNYynaZyubVRszftG68q886omTWFzJXRzGpXXnT1PZY21XQs6Wiuk%2BpCigAooAKKACigibsgoq9jy6tQKK5aszypyuV7iTaQtLPMEgJ9qxvckybc75t1SajIBFR1NEcy7bpK0bZtqc1qXY66iug%2BnCigAooAKKACihHLipWiFFY1Kp4VSoITjFV2l%2Ff1zHMUp5t1xVe%2Fm%2BTrVI1SKdtJgVX1C6%2BXFWaWM6Bvmq8H4pss7Wiuk%2BkCigAooAKKACisqk%2BVHm5jK0EJmonlwDXHe54O5Wkm%2BcVT8%2F941M0SKRmzKTVS8nzWhqkMSbC1nXk2WqkaEMTc1K9xtFWM9Iorc%2Bg5kFFAwooGFFAgqGSbFcFeV6vKeTmTvZFWSeqss%2FXmkeXYrvP85qn53ytVo0RU83rVOeXL1ZY1pcJWdLLl6ookSTiobiXigZ61RXQ5o7VWCilzo0VYKKOZF%2B3CiolVSF7e7IZJOSPSsmW4yxryqc%2Beq5HHive1K0k9Vnm%2FnXWcliu033qqvL%2B7qyiv5vy1TaTL1Yxks2FqiZMtTQMf5uBVS4noBntm4etG4VzNsjUMilpczKuwpM0uZj5mJuFRyTqi5rKrflLp3cjMknO0%2B9ZFxNh6zw3xG9Ve6VWnqAz9K9A5is83yGq8s3yVQ7EDzfJVYS80xEM81VRLzTJHNNVCeXmgZ7Ubnmk%2B01zsLDvtNH2qpsOwfaqabn3oHYYbqq1xc5FZ1NjWmtSjNc%2FLWTPcfNU0F7xtU2KzT1C0%2F8AKu45iB5vlFV55uaZJDNP8tQCXimLqVZpsmovNoBEck%2FFU2lyaZaif%2F%2FZ';


  return (

    <View>
      <Image style={{width: 160, height: 120}} source={{uri: base64Icon}}/>
      <Text>

        Witaj przyjacielu xD
      </Text>

      <LogApp />

    </View>

  )

};