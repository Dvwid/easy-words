import {Component, OnInit} from '@angular/core';
import {WordsService} from "../services/words.service";
import {WordsDto} from "../dtos";

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.component.html',
  styleUrls: ['./new-word.component.css']
})
export class NewWordComponent implements OnInit {

  word: WordsDto;
  words: WordsDto[] = [];
  selectedIndex: number = 0;
  lastWordsLimit = 10;
  isLoading = false;

  constructor(private wordsService: WordsService) {
  }

  ngOnInit(): void {
    this.setInitialWordData();
    this.isLoading = true;
    this.wordsService.getLastCreatedWords(this.lastWordsLimit)
      .subscribe(data => {
        this.isLoading = false;
        this.words = data;
      });
  }

  setInitialWordData() {
    this.word = {} as WordsDto;
    this.word.score = 0;
    this.word.skipped = 0;
    this.word.watched = 0;
  }

  saveWord() {
    if (!this.word.name) {
      return;
    }
    this.word.createdAt = Date.now();
    this.wordsService.addWord(this.word).subscribe(() => {
      this.selectedIndex = 2;
      this.setInitialWordData();
    });
  }
}
