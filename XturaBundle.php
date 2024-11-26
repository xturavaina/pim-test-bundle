<?php

namespace Xtura\Bundle\XturaBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class XturaBundle extends Bundle
{
  public function getPublicDir(): string
  {
      return __DIR__ . '/Resources/public';
  }
  // comentem per prova path
  // public function getPath(): string
  // {
  //     return \dirname(__DIR__, 3).'/Xtura/Bundle/XturaBundle';
  // }
}