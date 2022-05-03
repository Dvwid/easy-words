import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WordsService} from "../services/words.service";
import {WordsDto} from "../dtos";
import {take} from "rxjs";
import {ToastService} from "../core/toast/toast.service";

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent implements OnInit {

  @ViewChild('card') card: ElementRef;

  randomWord: WordsDto;
  flip = false;
  isFirstFlip = true;
  answer: string;
  private _words: WordsDto[];

  constructor(private wordsService: WordsService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.getAllWords();
  }

  flipCard() {
    this.flip = !this.flip;
    this.afterFlipCard();
  }

  checkAnswer() {
    if (!this.answer) {
      this.toastService.openToastBar('Wpisz odpowiedź przed sprawdzeniem.', 2, false);
      return;
    }
    if (this.randomWord?.translation?.toLowerCase() !== this.answer?.toLowerCase()) {
      this.toastService.openToastBar('Nie udało ci się, kliknij w fiszkę i zobacz odpowiedź.', 2, false);
      return;
    }
    this.toastService.openToastBar('Odpowiedź poprawna!', 2, true);
    this.answer = null;
    this.callToSwitchCardAnimation();
  }


  callToSwitchCardAnimation() {
    this.card.nativeElement.className = 'flip-card flip-card-switch';
    setTimeout(() => {
      this.drawAWord();
    }, 500);
    setTimeout(() => {
      this.card.nativeElement.className = 'flip-card';
    }, 1000);
  }

  private drawAWord() {
    if (this._words.length === 0) {
      this.randomWord = {} as WordsDto;
      return;
    }
    this.isFirstFlip = true;
    this.randomWord = this._words[Math.floor(Math.random() * this._words.length)];
  }

  private getAllWords() {
    this.wordsService.getAllDocuments()
      .pipe(take(1))
      .subscribe(data => {
        this._words = data;
        this.drawAWord();
      });
  }

  private afterFlipCard() {
    if (!this.isFirstFlip) {
      return;
    }
    this.randomWord.watched++;
    this.wordsService.updateWord(this.randomWord.id, this.randomWord).subscribe();
    this.isFirstFlip = false;
  }
}
