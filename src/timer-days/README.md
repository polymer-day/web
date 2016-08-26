## &lt;timer-days&gt;
This component will display a countdown expressed in days, hours, minutes and seconds until a deadline date. More than one timer can be displayed at once.

Example:
```
<timer-days target-date="2017-11-20T16:40:00"></timer-days><br>
<timer-days target-date="2017-12-30T16:40:00"></timer-days><br>
```

<br>You can specify the language in which the labels will be shown. By default they are in english, but you can use `lang` to choose between English (en), Spanish (es), French (fr), Italian (it), Portuguese (pt) or German (de).

Example:
```
<timer-days target-date="2017-11-20T16:40:00"></timer-days><br>
<timer-days target-date="2017-11-20T16:40:00" lang="es"></timer-days><br>
<timer-days target-date="2017-11-20T16:40:00" lang="fr"></timer-days><br>
<timer-days target-date="2017-11-20T16:40:00" lang="pt"></timer-days><br>
<timer-days target-date="2017-11-20T16:40:00" lang="it"></timer-days><br>
<timer-days target-date="2017-11-20T16:40:00" lang="de"></timer-days><br>
```

<br>It is also posible to set the text to be displayed before and after the proper countdown, by using the `before` and `after` properties.

Example:
```
<timer-days target-date="2018-11-20T16:40:00" before="Your planet will be destroyed in about"></timer-days><br>
<timer-days target-date="2018-11-20T16:40:00" after="until it finds you"></timer-days><br>
<timer-days target-date="2018-11-20T16:40:00" before="You still have" after="before something very bad happens"></timer-days>
```

<br>
### Styling
The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--timer-days-background-color` | The timer-days background-color | `#FFD54F`
`--timer-days-border-color` | The timer-days border-color | `#212121`
`--timer-days-font-color` | The timer-days font color | `#212121`
`--timer-days-hover-background-color` | The timer-days background-color when mouse is over it | `#4E342E`
`--timer-days-hover-border-color` | The timer-days border-color when mouse is over it | `#CFD8DC`
`--timer-days-hover-font-color` | The timer-days font color when mouse is over it | `#CFD8DC`
`--timer-days-font-description-size` | The timer-days font size for the text before an after the timer| `15px`
`--timer-days-font-number-size` | The timer-days font size for the numbers | `35px`
`--timer-days-font-text-size` | The timer-days font size for the words explaining each number | `18px`
