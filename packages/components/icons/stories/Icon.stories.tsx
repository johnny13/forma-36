import React, { Fragment } from 'react';
import { Flex, Grid } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-components';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { MdAcUnit as ExternalIcon } from 'react-icons/md';

import {
  ArrowDown,
  ArrowDownTrimmed,
  ArrowUp,
  ArrowUpTrimmed,
  Asset,
  AssetTrimmed,
  Calendar,
  ChatBubble,
  ChatBubbleTrimmed,
  CheckCircle,
  CheckCircleTrimmed,
  ChevronDown,
  ChevronDownTrimmed,
  ChevronLeft,
  ChevronLeftTrimmed,
  ChevronRight,
  ChevronRightTrimmed,
  ChevronUp,
  ChevronUpTrimmed,
  Clock,
  ClockTrimmed,
  Close,
  CloseTrimmed,
  Code,
  CodeTrimmed,
  Copy,
  CopyTrimmed,
  Cycle,
  CycleTrimmed,
  Delete,
  DeleteTrimmed,
  Done,
  DoubleArrow,
  Download,
  DownloadTrimmed,
  Drag,
  DragTrimmed,
  Edit,
  EditTrimmed,
  EmbeddedEntryBlock,
  EmbeddedEntryBlockTrimmed,
  EmbeddedEntryInline,
  EmbeddedEntryInlineTrimmed,
  Entry,
  EntryTrimmed,
  Environment,
  EnvironmentAlias,
  ErrorCircle,
  ErrorCircleOutline,
  ErrorCircleTrimmed,
  ExternalLink,
  ExternalLinkTrimmed,
  FaceHappy,
  FaceHappyTrimmed,
  Filter,
  FilterTrimmed,
  Folder,
  FolderCreate,
  FolderCreateTrimmed,
  FolderOpen,
  FolderOpenTrimmed,
  FolderTrimmed,
  FormatBold,
  FormatBoldTrimmed,
  FormatItalic,
  FormatItalicTrimmed,
  FormatUnderlined,
  FormatUnderlinedTrimmed,
  Heading,
  HeadingOne,
  HeadingOneTrimmed,
  HeadingTrimmed,
  HeadingTwo,
  HeadingTwoTrimmed,
  HelpCircle,
  HelpCircleInverted,
  HelpCircleTrimmed,
  HorizontalRule,
  HorizontalRuleTrimmed,
  Icon,
  InfoCircle,
  InfoCircleTrimmed,
  Language,
  Link,
  LinkAlternate,
  LinkTrimmed,
  ListBulleted,
  ListBulletedTrimmed,
  ListNumbered,
  ListNumberedTrimmed,
  Lock,
  LockTrimmed,
  Logout,
  LooksOne,
  LooksOneTrimmed,
  LooksTwo,
  LooksTwoTrimmed,
  Menu,
  MenuTrimmed,
  Minus,
  MoreHorizontal,
  MoreHorizontalTrimmed,
  MoreVertical,
  MoreVerticalTrimmed,
  Person,
  Plus,
  PlusCircle,
  PlusCircleTrimmed,
  PlusTrimmed,
  Preview,
  Quote,
  QuoteTrimmed,
  Receipt,
  ReceiptTrimmed,
  References,
  Release,
  ReleaseTrimmed,
  Search,
  SearchTrimmed,
  Settings,
  SettingsTrimmed,
  ShoppingCart,
  ShoppingCartTrimmed,
  Star,
  StarTrimmed,
  Subscript,
  SubscriptTrimmed,
  Superscript,
  SuperscriptTrimmed,
  Tags,
  Text,
  TextTrimmed,
  ThumbDown,
  ThumbDownTrimmed,
  ThumbUp,
  ThumbUpTrimmed,
  Users,
  UsersTrimmed,
  Warning,
  WarningTrimmed,
  Workflows,
} from '../src/';

export const allIcons = {
  ArrowDown,
  ArrowDownTrimmed,
  ArrowUp,
  ArrowUpTrimmed,
  Asset,
  AssetTrimmed,
  Calendar,
  ChatBubble,
  ChatBubbleTrimmed,
  CheckCircle,
  CheckCircleTrimmed,
  ChevronDown,
  ChevronDownTrimmed,
  ChevronLeft,
  ChevronLeftTrimmed,
  ChevronRight,
  ChevronRightTrimmed,
  ChevronUp,
  ChevronUpTrimmed,
  Clock,
  ClockTrimmed,
  Close,
  CloseTrimmed,
  Code,
  CodeTrimmed,
  Copy,
  CopyTrimmed,
  Cycle,
  CycleTrimmed,
  Delete,
  DeleteTrimmed,
  Done,
  DoubleArrow,
  Download,
  DownloadTrimmed,
  Drag,
  DragTrimmed,
  Edit,
  EditTrimmed,
  EmbeddedEntryBlock,
  EmbeddedEntryBlockTrimmed,
  EmbeddedEntryInline,
  EmbeddedEntryInlineTrimmed,
  Entry,
  EntryTrimmed,
  Environment,
  EnvironmentAlias,
  ErrorCircle,
  ErrorCircleOutline,
  ErrorCircleTrimmed,
  ExternalLink,
  ExternalLinkTrimmed,
  FaceHappy,
  FaceHappyTrimmed,
  Filter,
  FilterTrimmed,
  Folder,
  FolderCreate,
  FolderCreateTrimmed,
  FolderOpen,
  FolderOpenTrimmed,
  FolderTrimmed,
  FormatBold,
  FormatBoldTrimmed,
  FormatItalic,
  FormatItalicTrimmed,
  FormatUnderlined,
  FormatUnderlinedTrimmed,
  Heading,
  HeadingOne,
  HeadingOneTrimmed,
  HeadingTrimmed,
  HeadingTwo,
  HeadingTwoTrimmed,
  HelpCircle,
  HelpCircleInverted,
  HelpCircleTrimmed,
  HorizontalRule,
  HorizontalRuleTrimmed,
  InfoCircle,
  InfoCircleTrimmed,
  Language,
  Link,
  LinkAlternate,
  LinkTrimmed,
  ListBulleted,
  ListBulletedTrimmed,
  ListNumbered,
  ListNumberedTrimmed,
  Lock,
  LockTrimmed,
  Logout,
  LooksOne,
  LooksOneTrimmed,
  LooksTwo,
  LooksTwoTrimmed,
  Menu,
  MenuTrimmed,
  Minus,
  MoreHorizontal,
  MoreHorizontalTrimmed,
  MoreVertical,
  MoreVerticalTrimmed,
  Person,
  Plus,
  PlusCircle,
  PlusCircleTrimmed,
  PlusTrimmed,
  Preview,
  Quote,
  QuoteTrimmed,
  Receipt,
  ReceiptTrimmed,
  References,
  Release,
  ReleaseTrimmed,
  Search,
  SearchTrimmed,
  Settings,
  SettingsTrimmed,
  ShoppingCart,
  ShoppingCartTrimmed,
  Star,
  StarTrimmed,
  Subscript,
  SubscriptTrimmed,
  Superscript,
  SuperscriptTrimmed,
  Tags,
  Text,
  TextTrimmed,
  ThumbDown,
  ThumbDownTrimmed,
  ThumbUp,
  ThumbUpTrimmed,
  Users,
  UsersTrimmed,
  Warning,
  WarningTrimmed,
  Workflows,
};

export default {
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: Icon,
  parameters: {
    propTypes: [Icon['__docgenInfo']],
  },
  title: 'Components/Icon',
} as Meta;

export const Default: Story = (args) => (
  <>
    <Flex alignItems="center" marginBottom="spacingM">
      <Flex marginRight="spacingS">
        <SectionHeading element="h3">Built-in icons</SectionHeading>
      </Flex>
      <Flex>
        <ArrowDown {...args} />
      </Flex>
    </Flex>

    <Flex alignItems="center" marginBottom="spacingM">
      <Flex marginRight="spacingS">
        <SectionHeading element="h3">
          Custom icons with SVG paths
        </SectionHeading>
      </Flex>
      <Flex>
        <Icon {...args}>
          <Fragment>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </Fragment>
        </Icon>
      </Flex>
    </Flex>

    <Flex alignItems="center">
      <Flex marginRight="spacingS">
        <SectionHeading element="h3">
          Custom icons with third-party libraries
        </SectionHeading>
      </Flex>
      <Flex>
        <Icon {...args} as={ExternalIcon} />
      </Flex>
    </Flex>
  </>
);

export const Overview: Story = () => (
  <>
    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Built-in icons</SectionHeading>
      </Flex>

      <Grid columns={'auto 1fr 1fr 1fr 1fr'}>
        {Object.keys(allIcons)
          // .filter((icon) => !icon.toLowerCase().includes('trimmed'))
          .map((iconName) => {
            const Component = allIcons[iconName];
            return (
              <Flex
                key={iconName}
                padding="spacingS"
                marginRight="spacingM"
                alignItems="center"
                justifyContent="flex-start"
                flexGrow={0}
              >
                <Flex marginRight="spacingS">{iconName}</Flex>
                <Component />
              </Flex>
            );
          })}
      </Grid>
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">
          Custom icons with SVG paths
        </SectionHeading>
      </Flex>

      <Icon>
        <Fragment>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </Fragment>
      </Icon>
    </Flex>

    <Flex flexDirection="column">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">
          Custom icons with third-party libraries
        </SectionHeading>
      </Flex>

      <Icon as={ExternalIcon} />
    </Flex>
  </>
);
