import {
  animate,
  query,
  sequence,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const DropDownAnimation = trigger('dropDownMenu', [
  transition(':enter', [
    style({ height: 0, overflow: 'hidden' }),
    query('.first-section-v-verse-menu ul li', [
      style({ opacity: 0, transform: 'translateY(-150px)' }),
    ]),
    sequence([
      animate('500ms', style({ height: '*' })),
      query('.first-section-v-verse-menu ul li', [
        stagger(-50, [
          animate('500ms ease', style({ opacity: 1, transform: 'none' })),
        ]),
      ]),
    ]),
  ]),

  transition(':leave', [
    style({ height: '*', overflow: 'hidden' }),
    query('.first-section-v-verse-menu ul li', [
      style({ opacity: 1, transform: 'none' }),
    ]),
    sequence([
      query('.first-section-v-verse-menu ul li', [
        stagger(50, [
          animate(
            '500ms ease',
            style({ opacity: 0, transform: 'translateY(150px)' })
          ),
        ]),
      ]),
      animate('500ms', style({ height: 0 })),
    ]),
  ]),
]);
