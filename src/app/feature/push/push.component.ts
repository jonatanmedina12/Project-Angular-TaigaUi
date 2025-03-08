import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiTable} from '@taiga-ui/addon-table';
import { TuiBooleanHandler } from '@taiga-ui/cdk/types';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TuiAutoColorPipe,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiIcon,
    TuiInitialsPipe,
    TuiLink,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiCheckbox,
    TuiChip,
    TuiDataListWrapper,
    TuiItemsWithMore,
    TuiProgressBar,
    TuiRadioList,
    TuiStatus,
} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';

const ITEMS: readonly string[] = [
  'Luke Skywalker and a long time ago in a galaxy far, far away..',
  'Leia Organa Solo',
  'Darth Vader',
  'Han Solo',
  'Obi-Wan Kenobi',
  'Yoda',
];
@Component({
  selector: 'app-push',
  imports: [  FormsModule,
    NgForOf,
    NgIf,
    TuiAutoColorPipe,
    TuiAvatar,
    TuiBadge,
    TuiButton,
    TuiCell,
    TuiCheckbox,
    TuiChip,
    TuiDropdown,
    TuiIcon,
    TuiInitialsPipe,
    TuiItemsWithMore,
    TuiLink,
    TuiProgressBar,
    TuiRadioList,
    TuiStatus,
    TuiTable,
    TuiTitle,
    ReactiveFormsModule,
        TuiDataList,
        TuiDataListWrapper,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,],
  templateUrl: './push.component.html',
  styleUrl: './push.component.scss'
})
export class PushComponent {
  protected readonly sizes = ['l', 'm', 's'] as const;
 
  protected size = this.sizes[0];

  protected readonly data = [
      {
          checkbox: {
              title: 'Data point 1',
              subtitle: 'The first element',
          },
          title: {
              icon: '@tui.file',
              title: 'This is title',
              chip: 'Chip',
              subtitle: 'More information ・ Data',
          },
          cell: {
              name: 'John Cleese',
              email: 'silly@walk.uk',
          },
          status: {
              value: 'Success',
              color: 'var(--tui-status-positive)',
          },
          items: ['Some', 'items', 'displayed', 'here', 'and', 'can', 'overflow'],
          progress: 78,
          selected: false,
      },
      {
          checkbox: {
              title: 'Some title',
              subtitle: 'Some more text',
          },
          title: {
              icon: '@tui.heart',
              title: 'More info',
              chip: 'Chips can be here',
          },
          cell: {
              name: 'Eric Idle',
              email: 'cool@dude.com',
          },
          status: {
              value: 'Failure',
              color: 'var(--tui-status-negative)',
          },
          items: ['One', 'Item'],
          progress: 91,
          selected: false,
      },
      {
          checkbox: {
              title: 'And now',
              subtitle: 'Completely different',
          },
          title: {
              icon: '@tui.star',
              title: 'Wow',
          },
          cell: {
              name: 'Michael Palin',
              email: 'its@man.com',
          },
          status: {
              value: 'Pending',
              color: 'var(--tui-status-warning)',
          },
          items: [],
          progress: 32,
          selected: false,
      },
  ];

  protected get checked(): boolean | null {
      const every = this.data.every(({selected}) => selected);
      const some = this.data.some(({selected}) => selected);

      return every || (some && null);
  }

  protected onCheck(checked: boolean): void {
      this.data.forEach((item) => {
          item.selected = checked;
      });
  }
  protected search: string | null = '';
 
  protected readonly control = new FormControl([ITEMS[0]]);

  @tuiPure
  protected filter(search: string | null): readonly string[] {
      return ITEMS.filter((item) => TUI_DEFAULT_MATCHER(item, search || ''));
  }

  protected tagValidator: TuiBooleanHandler<string> = (tag) => !tag.startsWith('Han');
}
