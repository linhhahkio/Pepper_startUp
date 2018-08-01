<?xml version="1.0" encoding="UTF-8" ?>
<Package name="start_up" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="behavior_1" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="Smalltalk" src="Smalltalk/Smalltalk.dlg" />
    </Dialogs>
    <Resources>
        <File name="index" src="html/index.html" />
        <File name="script" src="html/script.js" />
        <File name="linh" src="html/linh.jpg" />
        <File name="porokuokka" src="html/porokuokka.jpg" />
    </Resources>
    <Topics>
        <Topic name="Smalltalk_fif" src="Smalltalk/Smalltalk_fif.top" topicName="Smalltalk" language="fi_FI" />
    </Topics>
    <IgnoredPaths />
    <Translations auto-fill="en_US">
        <Translation name="translation_en_US" src="translations/translation_en_US.ts" language="en_US" />
        <Translation name="translation_fi_FI" src="translations/translation_fi_FI.ts" language="fi_FI" />
    </Translations>
</Package>
